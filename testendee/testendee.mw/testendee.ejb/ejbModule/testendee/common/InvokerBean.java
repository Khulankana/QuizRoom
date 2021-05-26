package testendee.common;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import javax.annotation.Resource;
import javax.ejb.EJB;
import javax.ejb.EJBContext;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.json.JSONArray;

import testendee.admin.AuthenticationBean;
import testendee.admin.UserManagerBean;
import testendee.client.data.DataAdminFunc;
import testendee.client.data.DataAdminUser;
import testendee.client.global.CommonError;
import testendee.client.global.FileLogger;
import testendee.client.global.SpecialFuncs;
import testendee.client.global.TestendeeException;
import testendee.client.global.Utils;
import testendee.client.main.IInvoker;
import testendee.client.main.IInvokerRemote;
import testendee.client.main.IThreadContext;
import testendee.client.main.Request;

/**
 * Session Bean implementation class InvokerBean
 */
@Stateless
@LocalBean
public class InvokerBean implements IInvoker, IInvokerRemote {

	@EJB
	CommonBean main;

	@EJB
	IThreadContext threadContext;

	@EJB
	UserManagerBean userManager;

	@EJB
	AuthenticationBean authen;

	@Resource
	EJBContext ctxt;

	@PersistenceContext
	EntityManager em;

	/**
	 * Default constructor.
	 */
	public InvokerBean() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public Object execute() throws TestendeeException {
		Object result = null;
		Request request = threadContext.getCurrentRequest();
		try {

			if (request.getFuncNo() != SpecialFuncs.LOGIN && request.getFuncNo() != SpecialFuncs.CHANGE_PASS
					&& request.getFuncNo() != SpecialFuncs.RESET_PASSWORD) {
				checkSession(request.getSession());

				String userId = authen.getSession(request.getSession()).getUserId();
				DataAdminUser user = userManager.detailUser(userId);
				request.setUserInfo(user);

				// Check Access
				checkAccess(userId, request.getFuncNo());
			}

			result = invoke(request);

		} catch (Exception e) {
			Throwable cause = e;
			FileLogger.error("Execute", String.format("func: %s, %s", request.getFuncNo(), e.getMessage()), e);
			if (TestendeeException.class.isAssignableFrom(cause.getClass())) {
				throw (TestendeeException) e;
			} else {
				throw new TestendeeException(e);
			}
		} finally {
			threadContext.setCurrentRequest(request);
		}

		return result;
	}

	@Override
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public Object invoke(Request request) throws TestendeeException {

		if (Utils.emptyOrNull(request.getLookup(), true) || Utils.emptyOrNull(request.getFuncName(), true)) {
			initFunction(request);
		}

		int responseCode = 0;
		String responseData = "";
		Object response = null;
		Object bean;
		try {

			bean = Utils.doLookup(request.getLookup(), true, true);

			Class<?> cls = bean.getClass();
			Method method = null;
			for (Method m : cls.getDeclaredMethods()) {
				if (m.getName().equals(request.getFuncName())) {
					method = m;
					break;
				}
			}

			if (method == null) {
				// TODO Method not found global.throwEx(MWMessage.METHOD_NOT_FOUND, "FUNC_NO",
				// request.getFuncNo());
			}

			Class<?>[] paramTypes = method.getParameterTypes();
			List<Object> paramValues = null;

			try {
				String strData = request.getData() == null || request.getData().trim().length() < 0 ? "[]"
						: request.getData();
				JSONArray jarr = new JSONArray(strData);
				paramValues = Utils.parseJSON(jarr, paramTypes);

			} catch (Exception e) {
				FileLogger.error(getClass(),
						String.format("func: %s, Invalid JSON data, %s", request.getFuncNo(), e.getMessage()), e);
				// TODO Invalid jsonglobal.throwEx(MWMessage.INVALID_JSON);
			}

			em.clear();

			Object[] params = paramValues.toArray();

			response = method.invoke(bean, params);
			if (response == null) {
				responseData = "\"\"";
			} else {
				responseData = Utils.toJSON(response);
			}

			if (!ctxt.getRollbackOnly()) {
				em.flush();
			}
			em.clear();

			return response;
		} catch (InvocationTargetException e) {

			responseCode = 1;
			responseData = e.getMessage();

			FileLogger.error(getClass(), String.format("func: %s, %s", request.getFuncNo(), e.getMessage()), e);

			if (e.getTargetException().getClass() == TestendeeException.class) {
				TestendeeException nwex = (TestendeeException) e.getTargetException();
				if (!nwex.isSetted()) {
					// TODO nwex.setMessage(global.getMsgWithNewTran(nwex.getCode()));
				}

				responseCode = nwex.getCode();
				responseData = nwex.getMessage();

				throw nwex;
			} else {

				Throwable dbEx = Utils.findDbEx(e);
				if (dbEx != null) {

					FileLogger.error("Database", String.format("func: %s, %s", request.getFuncNo(), dbEx.getMessage()),
							new Exception(dbEx));

					TestendeeException ex = new TestendeeException(CommonError.DATABASE_ERROR);
					ex.prepareDbError(dbEx.getMessage());
					// TODO ex.setMessage(global.getMsgWithNewTran(ex.getCode()));

					responseCode = ex.getCode();
					responseData = ex.getMessage();

					throw ex;
				}

				responseCode = CommonError.SYSTEM_ERROR;

				// TODO global.throwEx(MWMessage.SYSTEM_ERROR);
			}
		} catch (Exception e) {

			responseCode = 1;
			responseData = e.getMessage();

			Throwable cause = e;

			FileLogger.error(getClass(), String.format("func: %s, %s", request.getFuncNo(), e.getMessage()), e);

			if (TestendeeException.class.isAssignableFrom(cause.getClass())) {
				TestendeeException nwex = (TestendeeException) e;
				if (!nwex.isSetted()) {
					// TODO nwex.setMessage(global.getMsgWithNewTran(nwex.getCode()));
				}

				responseCode = nwex.getCode();
				responseData = nwex.getMessage();

				throw nwex;
			} else if (IllegalArgumentException.class.isAssignableFrom(cause.getClass())) {
				TestendeeException nwex = new TestendeeException(CommonError.INVALID_PARAM);
				if (!nwex.isSetted()) {
					// TODO nwex.setMessage(global.getMsgWithNewTran(nwex.getCode()));
				}

				responseCode = nwex.getCode();
				responseData = nwex.getMessage();

				throw nwex;
			} else {

				Throwable dbEx = Utils.findDbEx(e);
				if (dbEx != null) {

					FileLogger.error("Database", String.format("func: %s, %s", request.getFuncNo(), dbEx.getMessage()),
							new Exception(dbEx));

					TestendeeException ex = new TestendeeException(CommonError.DATABASE_ERROR);
					ex.prepareDbError(dbEx.getMessage());
					// TODO ex.setMessage(global.getMsgWithNewTran(ex.getCode()));

					responseCode = ex.getCode();
					responseData = ex.getMessage();

					throw ex;
				}

				responseCode = CommonError.SYSTEM_ERROR;
				// TODO global.throwEx(CommonError.SYSTEM_ERROR);
			}
		} finally {

		}

		return null;
	}

	public boolean checkSession(String session) throws TestendeeException {

//		TODO
		// if (Utils.emptyOrNull(session, true)) {
//			global.throwEx(91001013);
//		}
//
//		String param = String.format("[\"%s\"]", session);
//
//		Request request = new Request();
//		request.setLookup(MWConsts.CHECK_SESSION_LOOKUP);
//		request.setFuncName(MWConsts.CHECK_SESSION_FUNC_NAME);
//		request.setData(param);
//		request.setInternal(true);
//
//		Object obj = this.invoke(request);
//		boolean result = (boolean) obj;
//
//		return result;

		return true;
	}

	private boolean checkAccess(String userId, long funcNo) throws TestendeeException {

//		TODO
		// Request request = new Request();
//		request.setLookup(MWConsts.CHECK_ACCESS_LOOKUP);
//		request.setFuncName(MWConsts.CHECK_ACCESS_FUNC_NAME);
//		request.setData(param);
//		request.setInternal(true);
//
//		Object obj = this.invoke(request);
//		boolean result = (boolean) obj;
//
//		return result;

		return true;
	}

	private void initFunction(Request request) throws TestendeeException {
		DataAdminFunc func = main.getFunc(request.getFuncNo());
		request.setLookup(func.getLookup());
		request.setFuncName(func.getFuncName());
	}
}
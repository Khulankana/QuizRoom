package testendee.web.test;

import java.io.IOException;
import java.lang.reflect.Method;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import testendee.client.global.Converter;
import testendee.client.global.Utils;

/**
 * @author khairyi.z
 * @since 2020.08.27
 */
@WebServlet("/unittestbean")
public class UnitTestBeanServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private static final String[] NATIVE_METHODS = { "equals", "toString", "hashCode", "clone", "writeReplace" };

//	@EJB
//	IGlobalRemote global;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UnitTestBeanServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	private boolean checkNativeMethod(String name) {
		for (String nm : NATIVE_METHODS) {
			if (name.equalsIgnoreCase(nm)) {
				return true;
			}
		}

		return false;
	}

	public List<UnitTestMethod> getMethods(String lookup) {

		List<UnitTestMethod> methods = new ArrayList<UnitTestMethod>();

		try {

			Object bean = Utils.doLookup(UnitTestServlet.MAIN_JNDI + "/" + lookup, true, true);

			Class<?> cls = bean.getClass();
			for (Method m : cls.getDeclaredMethods()) {

				if (checkNativeMethod(m.getName())) {
					continue;
				}

				UnitTestMethod umethod = new UnitTestMethod(m.getName());

				methods.add(umethod);

				Class<?>[] paramTypes = m.getParameterTypes();
				umethod.setParamTypes(paramTypes);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return methods;
	}

	public String invokeMethod(String lookup, String func, String data, String paramHash) {
		try {
			Object bean = Utils.doLookup(lookup, true, true);

			Class<?> cls = bean.getClass();
			Method method = null;
			Class<?>[] paramTypes = null;
			for (Method m : cls.getDeclaredMethods()) {
				if (m.getName().equals(func)) {
					method = m;
					paramTypes = method.getParameterTypes();
					if (paramHash.equals(UnitTestMethod.getParamHash(paramTypes))) {
						break;
					} else {
						method = null;
					}
				}
			}

			if (method == null) {
				System.err.println("Method not found: " + func);
			}

			List<Object> paramValues = null;

			try {
				JSONArray jarr = new JSONArray(data);
				paramValues = Utils.parseJSON(jarr, paramTypes);

			} catch (Exception e) {
				e.printStackTrace();
			}

			Object[] params = paramValues.toArray();

			Object response = method.invoke(bean, params);
			return Utils.toJSON(response);
		} catch (Exception ex) {

			ex.printStackTrace();

			return Utils.toJSON(String.format("Error: %s", ex.getMessage()));
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String bean = request.getParameter("bean");

		try {

			List<UnitTestMethod> methods = getMethods(bean);
			request.setAttribute("beanName", bean);
			request.setAttribute("methodList", methods);

			request.getRequestDispatcher("/unittest/bean.jsp").forward(request, response);
		} catch (UnknownHostException uhex) {
			// Do nothing
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String lookup = UnitTestServlet.MAIN_JNDI + "/" + request.getHeader("lookup");
		long userId = Converter.toLong(request.getHeader("userId"));
		String method = request.getHeader("method");
		String paramHash = request.getHeader("paramHash");

		if (userId < 1L) {
			userId = 1L;
		}

//		TODO global.setCurUserId(userId);

		int contentLength = request.getContentLength();

		byte[] buffer = new byte[contentLength];
		int readed = 0;
		do {
			readed += request.getInputStream().read(buffer, readed, buffer.length - readed);
		} while (readed < buffer.length);

		String data = new String(buffer);

		String result = invokeMethod(lookup, method, data, paramHash);

		response.setContentType("text/plain;charset=UTF-8");
		if (result == null) {
			result = "null";
		}
		response.getWriter().write(result);
		response.getWriter().flush();
	}
}

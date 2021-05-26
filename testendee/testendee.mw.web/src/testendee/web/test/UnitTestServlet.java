package testendee.web.test;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.InitialContext;
import javax.naming.NameClassPair;
import javax.naming.NamingEnumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 
 */
@WebServlet("/unittest")
public class UnitTestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public static final String MAIN_JNDI = "java:global/testendee.ear";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UnitTestServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<UnitTestModule> getModules() {

		List<UnitTestModule> modules = new ArrayList<UnitTestModule>();

		try {

			InitialContext ctx = new InitialContext();
			NamingEnumeration<NameClassPair> list = ctx.list(MAIN_JNDI);
			while (list.hasMore()) {
				UnitTestModule mod = new UnitTestModule(list.next().getName());
				mod.setBeans(getBeans(mod.getName()));
				modules.add(mod);
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return modules;
	}

	public List<String> getBeans(String moduleName) {

		List<String> beans = new ArrayList<String>();

		try {

			InitialContext ctx = new InitialContext();
			NamingEnumeration<NameClassPair> list = ctx.list(MAIN_JNDI + "/" + moduleName);
			while (list.hasMore()) {
				beans.add(list.next().getName());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return beans;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		List<UnitTestModule> modules = getModules();
		request.setAttribute("moduleList", modules);

		try {
			request.getRequestDispatcher("/unittest/index.jsp").forward(request, response);
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

		doGet(request, response);
	}

}

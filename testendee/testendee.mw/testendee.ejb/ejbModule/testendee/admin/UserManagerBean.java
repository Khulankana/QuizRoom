package testendee.admin;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import testendee.client.data.DataAdminUser;
import testendee.client.global.Converter;
import testendee.client.global.TestendeeException;
import testendee.ejb.entity.AdminUser;

/**
 * Session Bean implementation class UserManagerBean
 */
@Stateless
@LocalBean
public class UserManagerBean {

	@PersistenceContext
	EntityManager em;

	/**
	 * Default constructor.
	 */
	public UserManagerBean() {
		// TODO Auto-generated constructor stub
	}

	public List<DataAdminUser> selectUser(DataAdminUser search) throws TestendeeException {
		List<AdminUser> users = em.createQuery("select c from AdminUser c", AdminUser.class).getResultList();

		return Converter.cloneObjectList(users, DataAdminUser.class);
	}

	public DataAdminUser detailUser(String userId) throws TestendeeException {
		AdminUser user = em.find(AdminUser.class, Converter.toStdStr(userId));
		if (user == null) {
			// TODO throw not found exception
		}

		return Converter.cloneObject(user, DataAdminUser.class);
	}

	public DataAdminUser getUserByLoginName(String loginName, boolean throwException) throws TestendeeException {
		List<AdminUser> users = em.createQuery("select c from AdminUser c where loginName = ?1", AdminUser.class)
				.setParameter(1, Converter.toStdStr(loginName)).getResultList();
		if (users.isEmpty()) {
			if (throwException) {
				// TODO throw not found exception
			}

			return null;
		}

		return Converter.cloneObject(users.get(0), DataAdminUser.class);
	}

}

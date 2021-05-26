package testendee.client.data;

import java.io.Serializable;

public class LoginResult implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private DataAdminUser user;

	private String session;

	public LoginResult() {

	}

	public DataAdminUser getUser() {
		return user;
	}

	public void setUser(DataAdminUser user) {
		this.user = user;
	}

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

}

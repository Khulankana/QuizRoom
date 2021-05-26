package testendee.client.data;

import java.io.Serializable;
import java.util.Date;

/**
 * The persistent class for the admin_user database table.
 * 
 */
public class DataAdminUser implements Serializable {
	private static final long serialVersionUID = 1L;

	private String userId;

	private String email;

	private String firstName;

	private Date lastConnDatetime;

	private String lastName;

	private String loginName;

	private String mobileNo;

	private String pass;

	private Date registeredDatetime;

	private int roleId;

	private String tmpPass;

	private int wrongTry;

	public DataAdminUser() {
	}

	public String getUserId() {
		return this.userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public Date getLastConnDatetime() {
		return this.lastConnDatetime;
	}

	public void setLastConnDatetime(Date lastConnDatetime) {
		this.lastConnDatetime = lastConnDatetime;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLoginName() {
		return this.loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getMobileNo() {
		return this.mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPass() {
		return this.pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public Date getRegisteredDatetime() {
		return this.registeredDatetime;
	}

	public void setRegisteredDatetime(Date registeredDatetime) {
		this.registeredDatetime = registeredDatetime;
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getTmpPass() {
		return this.tmpPass;
	}

	public void setTmpPass(String tmpPass) {
		this.tmpPass = tmpPass;
	}

	public int getWrongTry() {
		return this.wrongTry;
	}

	public void setWrongTry(int wrongTry) {
		this.wrongTry = wrongTry;
	}

}
package testendee.client.data;

import java.io.Serializable;

/**
 * The persistent class for the admin_func database table.
 * 
 */
public class DataAdminFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	private int funcNo;

	private String funcName;

	private String lookup;

	private String description;

	public DataAdminFunc() {
	}

	public int getFuncNo() {
		return this.funcNo;
	}

	public void setFuncNo(int funcNo) {
		this.funcNo = funcNo;
	}

	public String getFuncName() {
		return this.funcName;
	}

	public void setFuncName(String funcName) {
		this.funcName = funcName;
	}

	public String getLookup() {
		return this.lookup;
	}

	public void setLookup(String lookup) {
		this.lookup = lookup;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
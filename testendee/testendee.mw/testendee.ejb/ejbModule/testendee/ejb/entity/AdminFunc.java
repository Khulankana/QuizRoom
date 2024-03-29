package testendee.ejb.entity;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the admin_func database table.
 * 
 */
@Entity
@Table(name = "admin_func")
@NamedQuery(name = "AdminFunc.findAll", query = "SELECT a FROM AdminFunc a")
public class AdminFunc implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "FUNC_NO")
	private int funcNo;

	@Column(name = "FUNC_NAME")
	private String funcName;

	private String lookup;

	private String description;

	public AdminFunc() {
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
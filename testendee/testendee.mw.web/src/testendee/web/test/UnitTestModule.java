package testendee.web.test;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class UnitTestModule implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String name;
	private List<String> beans = new ArrayList<String>();

	public UnitTestModule(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getBeans() {
		return beans;
	}

	public void setBeans(List<String> beans) {
		this.beans = beans;
	}

}

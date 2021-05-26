package testendee.web.test;

import java.io.Serializable;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.security.MessageDigest;
import java.util.Date;
import java.util.Formatter;

import testendee.client.global.Converter;

public class UnitTestMethod implements Serializable {

	private final String[] SKIP_VALUES = { "companyCode", "createdBy", "createdDatetime", "modifiedDatetime",
			"createdUserName", "modifiedUserName", "modifiedBy" };

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String name;

	private Class<?>[] paramTypes;

	public UnitTestMethod(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Class<?>[] getParamTypes() {
		return paramTypes;
	}

	public void setParamTypes(Class<?>[] paramTypes) {
		this.paramTypes = paramTypes;
	}

	public String getJson() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < this.paramTypes.length; i++) {
			if (sb.length() > 0) {
				sb.append(",\n");
			}
			sb.append(getJson(this.paramTypes[i]));
		}
		return sb.toString();
	}

	private boolean checkSkipValue(String property) {
		for (String skipV : SKIP_VALUES) {
			if (skipV.equalsIgnoreCase(property)) {
				return true;
			}
		}

		return false;
	}

	private String getJson(Class<?> type) {

		StringBuilder res = new StringBuilder();

		if (res.length() > 0) {
			res.append(",\n");
		}
		if (type == Boolean.TYPE || type == Boolean.class) {
			res.append("\"true\"");
		} else if (type == Character.TYPE || type == Character.class) {
			res.append("\"\"");
		} else if (type == Byte.TYPE || type == Byte.class) {
			res.append(0);
		} else if (type == Short.TYPE || type == Short.class) {
			res.append(0);
		} else if (type == Integer.TYPE || type == Integer.class) {
			res.append(0);
		} else if (type == Long.TYPE || type == Long.class) {
			res.append(0);
		} else if (type == Float.TYPE || type == Float.class) {
			res.append(0);
		} else if (type == Double.TYPE || type == Double.class) {
			res.append(0);
		} else if (type == BigDecimal.class) {
			res.append("\"0.0\"");
		} else if (type == String.class) {
			res.append("\"\"");
		} else if (type == Date.class) {
			res.append("\"" + Converter.toDateStr(new Date()) + "\"");
		} else if (type.isArray()) { // array
			Class<?> cType = type.getComponentType();
			res.append("[").append(getJson(cType)).append("]");
		} else { /* complex type */
			res.append("\n{\n");
			int mCount = 0;
			for (Method m : type.getMethods()) {
				if (m.getName().startsWith("set") && m.getParameterTypes().length == 1 && m.getName().length() > 3) {
					String key = Converter.firstChar2Lower(m.getName().substring(3));
					if (checkSkipValue(key)) {
						continue;
					}
					if (mCount > 0) {
						res.append(",\n");
					}
					res.append("\"" + key + "\": ").append("\"\"");
					mCount++;
				}
			}
			res.append("\n}");

		}

		return res.toString();
	}

	public String getParamHash() {
		try {
			return getParamHash(this.paramTypes);
		} catch (Exception e) {
			return "";
		}
	}

	public static String getParamHash(Class<?>[] paramTypes) throws Exception {
		StringBuilder sb = new StringBuilder();
		if (paramTypes == null) {
			return "";
		}
		sb.append(paramTypes.length);
		for (int i = 0; i < paramTypes.length; i++) {
			sb.append("#").append(paramTypes[i].getClass().getName());
		}

		return hashSHA1(sb.toString());
	}

	public static String hashSHA1(String value) throws Exception {
		MessageDigest crypt = MessageDigest.getInstance("SHA-1");
		crypt.reset();
		crypt.update(value.getBytes("UTF-8"));
		String sha1 = byteToHex(crypt.digest());

		return sha1;
	}

	private static String byteToHex(final byte[] hash) {
		Formatter formatter = new Formatter();
		for (byte b : hash) {
			formatter.format("%02x", b);
		}
		String result = formatter.toString();
		formatter.close();
		return result;
	}

}

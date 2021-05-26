package testendee.client.data;

import java.io.Serializable;
import java.util.Date;

/**
 * The persistent class for the admin_user_session database table.
 * 
 */
public class DataAdminUserSession implements Serializable {
	private static final long serialVersionUID = 1L;

	private String sessionId;

	private Date connectedDatetime;

	private Date lastTouchTime;

	private String userId;

	public DataAdminUserSession() {
	}

	public String getSessionId() {
		return this.sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Date getConnectedDatetime() {
		return this.connectedDatetime;
	}

	public void setConnectedDatetime(Date connectedDatetime) {
		this.connectedDatetime = connectedDatetime;
	}

	public Date getLastTouchTime() {
		return this.lastTouchTime;
	}

	public void setLastTouchTime(Date lastTouchTime) {
		this.lastTouchTime = lastTouchTime;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
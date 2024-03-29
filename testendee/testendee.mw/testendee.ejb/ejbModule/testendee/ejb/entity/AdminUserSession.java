package testendee.ejb.entity;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.math.BigInteger;

/**
 * The persistent class for the admin_user_session database table.
 * 
 */
@Entity
@Table(name = "admin_user_session")
@NamedQuery(name = "AdminUserSession.findAll", query = "SELECT a FROM AdminUserSession a")
public class AdminUserSession implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "SESSION_ID")
	private String sessionId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CONNECTED_DATETIME")
	private Date connectedDatetime;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "LAST_TOUCH_TIME")
	private Date lastTouchTime;

	@Column(name = "USER_ID")
	private String userId;

	public AdminUserSession() {
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
package testendee.client.data;

import java.io.Serializable;
import java.util.Date;

/**
 * The persistent class for the quiz_room database table.
 * 
 */
public class DataQuizRoom implements Serializable {
	private static final long serialVersionUID = 1L;

	private int roomId;

	private String createdBy;

	private Date createdDatetime;

	private String name;

	private int questionDuration;

	private String scoreType;

	private String roomNo;

	public DataQuizRoom() {
	}

	public int getRoomId() {
		return this.roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDatetime() {
		return this.createdDatetime;
	}

	public void setCreatedDatetime(Date createdDatetime) {
		this.createdDatetime = createdDatetime;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuestionDuration() {
		return this.questionDuration;
	}

	public void setQuestionDuration(int questionDuration) {
		this.questionDuration = questionDuration;
	}

	public String getScoreType() {
		return this.scoreType;
	}

	public void setScoreType(String scoreType) {
		this.scoreType = scoreType;
	}

	public String getRoomNo() {
		return roomNo;
	}

	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}

}
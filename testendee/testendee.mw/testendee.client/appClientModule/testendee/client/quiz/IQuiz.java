package testendee.client.quiz;

import java.util.List;

import javax.ejb.Local;

import testendee.client.data.DataQuizRoom;
import testendee.client.global.TestendeeException;

@Local
public interface IQuiz {
	/**
	 * Асуултын өрөөн жагсаалт авах
	 * 
	 * @param search
	 * @return
	 * @throws TestendeeException
	 */
	public List<DataQuizRoom> selectQuizRoom(String search) throws TestendeeException;
}

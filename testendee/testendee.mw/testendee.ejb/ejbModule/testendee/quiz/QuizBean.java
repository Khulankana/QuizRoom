package testendee.quiz;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import testendee.client.data.DataQuizRoom;
import testendee.client.global.Converter;
import testendee.client.global.TestendeeException;
import testendee.client.quiz.IQuiz;
import testendee.ejb.entity.QuizRoom;

/**
 * Session Bean implementation class QuizBean
 */
@Stateless
@LocalBean
public class QuizBean implements IQuiz {

	@PersistenceContext
	EntityManager em;

	/**
	 * Default constructor.
	 */
	public QuizBean() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Асуултын өрөөн жагсаалт авах
	 * 
	 * @param search
	 * @return
	 * @throws TestendeeException
	 */
	@Override
	public List<DataQuizRoom> selectQuizRoom(String search) throws TestendeeException {

		List<QuizRoom> quizes = em.createQuery(
				"select c from QuizRoom c where c.name like ?1 or c.roomNo like ?1 order by c.createdDatetime",
				QuizRoom.class).setParameter(1, search).getResultList();

		return Converter.cloneObjectList(quizes, DataQuizRoom.class);
	}

}

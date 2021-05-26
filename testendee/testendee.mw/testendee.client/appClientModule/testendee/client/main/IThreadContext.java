package testendee.client.main;

import javax.ejb.Local;

@Local
public interface IThreadContext {

	public Request getCurrentRequest();

	public void setCurrentRequest(Request request);

	public void reset();

	public void release();

	public int getJobSize();
}
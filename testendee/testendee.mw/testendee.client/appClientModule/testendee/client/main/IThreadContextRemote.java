package testendee.client.main;

import javax.ejb.Remote;

@Remote
public interface IThreadContextRemote {

	public Request getCurrentRequest();

	public void setCurrentRequest(Request request);

	public void reset();

	public void release();

	public int getJobSize();

}
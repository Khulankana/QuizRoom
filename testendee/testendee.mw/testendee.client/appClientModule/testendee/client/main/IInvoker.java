package testendee.client.main;

import javax.ejb.Local;

import testendee.client.global.TestendeeException;

@Local
public interface IInvoker {

	public Object execute() throws TestendeeException;

	public Object invoke(Request request) throws TestendeeException;

}

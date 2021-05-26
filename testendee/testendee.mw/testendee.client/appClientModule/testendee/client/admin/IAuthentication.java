package testendee.client.admin;

import javax.ejb.Local;

import testendee.client.data.LoginRequest;
import testendee.client.data.LoginResult;
import testendee.client.global.TestendeeException;

@Local
public interface IAuthentication {

	public LoginResult login(LoginRequest request) throws TestendeeException;
}

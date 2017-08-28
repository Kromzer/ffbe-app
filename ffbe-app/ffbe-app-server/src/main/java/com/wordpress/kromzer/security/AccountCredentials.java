package com.wordpress.kromzer.security;

/**
 * Account credential.
 */
public class AccountCredentials {

	/** User name. */
	private String username;
	/** User password. */
	private String password;

	/**
	 * Getter for username.
	 * @return username
	 */
	public final String getUsername() {
		return username;
	}

	/**
	 * Setter for username.
	 * @param username the new username
	 */
	public final void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

}
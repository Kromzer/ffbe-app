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

	public final String getPassword() {
		return password;
	}

	public final void setPassword(String password) {
		this.password = password;
	}
}
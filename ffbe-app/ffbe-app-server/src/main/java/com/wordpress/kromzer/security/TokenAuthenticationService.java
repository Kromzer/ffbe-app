package com.wordpress.kromzer.security;

import java.util.Collections;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * Service creating and verifying tokens.
 */
public class TokenAuthenticationService {

	/** Token expiration time. */
	static final long EXPIRATION_TIME = 864_000_000; // 10 days
	/** Secret to communicate between front/back. */
	static final String SECRET = "ThisIsASecret";
	/** Header token prefix. */
	static final String TOKEN_PREFIX = "Bearer";
	/** Header string. */
	static final String HEADER_STRING = "Authorization";

	/**
	 * Add token to headers.
	 * @param res response
	 * @param username username
	 */
	static void addAuthentication(HttpServletResponse res, String username) {
		String JWT = Jwts.builder().setSubject(username)
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SECRET).compact();
		res.addHeader("Access-Control-Expose-Headers", "Authorization");
		res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
	}

	/**
	 * Parse the token to get authentication.
	 * @param request the request containing the header
	 * @return the Authentication
	 */
	static Authentication getAuthentication(HttpServletRequest request) {
		String token = request.getHeader(HEADER_STRING);
		if (token != null) {
			// parse the token.
			String user = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody()
					.getSubject();

			return user != null ? new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList()) : null;
		}
		return null;
	}
}
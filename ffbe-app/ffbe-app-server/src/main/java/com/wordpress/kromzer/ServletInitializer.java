package com.wordpress.kromzer;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/** Servlet initializer. */
public class ServletInitializer extends SpringBootServletInitializer {

	/** {@inheritDoc} */
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(FFBEAppServerApplication.class);
	}

}

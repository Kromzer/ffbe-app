package com.wordpress.kromzer.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthentificationController {

	@RequestMapping("/api/hello")
	public String greet() {
		return "Hello from the other side!!!";
	}
}

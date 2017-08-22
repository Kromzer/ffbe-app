package com.wordpress.kromzer.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wordpress.kromzer.dto.CharacterDTO;

@RestController
public class CharactersController {

	/**
	 * Method returning all characters.
	 * @return all characters as {@link com.wordpress.kromzer.dto.CharacterDTO}
	 * @throws IOException if an error occurs
	 */
	@RequestMapping(value = "/api/getCharacters")
	public @ResponseBody String getCharacters() throws IOException {

		List<CharacterDTO> listCharacters = new ArrayList<>();

		try (Stream<Path> paths = Files.walk(Paths.get("C:\\Users\\Kromzer\\Desktop\\unit_filtered"))) {
			paths.filter(Files::isRegularFile).forEach(file -> {
				try {
					CharacterDTO character = new CharacterDTO();
					character.setImageByteArray(Files.readAllBytes(file));
					character.setName(file.getFileName().toString().split("-")[0]);
					listCharacters.add(character);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			});
		}

		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = mapper.writeValueAsString(listCharacters);

		return jsonInString;
	}
}

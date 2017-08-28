package com.wordpress.kromzer.controllers;

import java.io.IOException;

import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wordpress.kromzer.utils.DataHelper;

/** Controller used to get everything related to characters. */
@RestController
public class CharactersController {

	/**
	 * Method returning all characters.
	 * @return all characters as {@link com.wordpress.kromzer.dto.CharacterDTO}
	 * @throws IOException if an error occurs
	 * @throws JSONException
	 */
	@RequestMapping(value = "/api/getCharacters")
	public @ResponseBody String getCharacters() throws IOException, JSONException {

		// List<CharacterDTO> listCharacters = new ArrayList<>();
		//
		// try (Stream<Path> paths =
		// Files.walk(Paths.get("C:\\Users\\Kromzer\\Desktop\\unit_filtered"))) {
		// paths.filter(Files::isRegularFile).forEach(file -> {
		// try {
		// CharacterDTO character = new CharacterDTO();
		// character.setImageByteArray(Files.readAllBytes(file));
		// character.setName(file.getFileName().toString().split("-")[0]);
		//
		// System.out.println("Find character with name : " + character.getName());
		// listCharacters.add(character);
		// } catch (IOException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// }
		// });
		// }

		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = mapper.writeValueAsString(DataHelper.getCharacters());

		return jsonInString;
	}
}

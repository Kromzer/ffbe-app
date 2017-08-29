package com.wordpress.kromzer.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wordpress.kromzer.dto.CharacterDTO;
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

		ObjectMapper mapper = new ObjectMapper();

		List<CharacterDTO> characters = new ArrayList<>();
		Map<String, CharacterDTO> charactersMap = DataHelper.getCharacters();

		for (String key : charactersMap.keySet()) {
			characters.add(charactersMap.get(key));
		}
		String jsonInString = mapper.writeValueAsString(charactersMap);

		return jsonInString;
	}

	/**
	 * Return a character
	 * @param name the character name
	 * @return the JSON representing the character
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonGenerationException
	 */
	@RequestMapping(value = "/api/getCharacter/{name}")
	public @ResponseBody String getCharacter(@PathVariable String name)
			throws JsonGenerationException, JsonMappingException, IOException {
		ObjectMapper mapper = new ObjectMapper();

		String jsonInString = mapper.writeValueAsString(DataHelper.getCharacter(name));

		return jsonInString;
	}
}

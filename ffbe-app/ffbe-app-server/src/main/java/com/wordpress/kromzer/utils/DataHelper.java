package com.wordpress.kromzer.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.wordpress.kromzer.FFBEAppServerApplication;
import com.wordpress.kromzer.dto.CharacterDTO;
import com.wordpress.kromzer.dto.SkillDTO;

/** Class storing data. */
public final class DataHelper {

	/** Stores character. */
	private static List<CharacterDTO> characters = null;

	/** Hide default constructor. */
	private DataHelper() {
	}

	/**
	 * @return the characters
	 * @throws IOException
	 * @throws JSONException
	 */
	public static final List<CharacterDTO> getCharacters() throws IOException, JSONException {

		if (characters == null) {
			File unitsFile = new File(
					FFBEAppServerApplication.class.getClassLoader().getResource("units.json").getFile());
			File skillsFile = new File(
					FFBEAppServerApplication.class.getClassLoader().getResource("skills.json").getFile());

			String unitsStr = new String(Files.readAllBytes(Paths.get(unitsFile.getPath())));
			String skillsStr = new String(Files.readAllBytes(Paths.get(skillsFile.getPath())));

			JSONObject unitsJObject = new JSONObject(unitsStr.trim());
			JSONObject skillsJObject = new JSONObject(skillsStr.trim());

			Iterator<?> keys = unitsJObject.keys();

			characters = new ArrayList<>();

			while (keys.hasNext()) {
				CharacterDTO character = new CharacterDTO();

				String key = (String) keys.next();
				if (unitsJObject.get(key) instanceof JSONObject) {
					character.setName(unitsJObject.getJSONObject(key).getString("name"));

					Iterator<?> entries = unitsJObject.getJSONObject(key).getJSONObject("entries").keys();

					while (entries.hasNext()) {
						String currentEntry = (String) entries.next();
						if (new File(("C:\\Users\\Kromzer\\Desktop\\unit\\unit_icon_" + currentEntry + ".png"))
								.exists()) {
							character.setImageByteArray(Files.readAllBytes(Paths
									.get("C:\\Users\\Kromzer\\Desktop\\unit\\unit_icon_" + currentEntry + ".png")));
							character.setId(currentEntry);
							break;
						}

					}

					JSONArray unitsSkillsJsonArray;

					try {
						unitsSkillsJsonArray = (JSONArray) unitsJObject.getJSONObject(key).get("skills");
					} catch (JSONException e) {
						continue;
					}

					for (int i = 0; i < unitsSkillsJsonArray.length(); i++) {
						JSONObject jsonSkill = skillsJObject
								.getJSONObject(String.valueOf(unitsSkillsJsonArray.getJSONObject(i).getInt("id")));

						SkillDTO skill = new SkillDTO();
						skill.setId(String.valueOf(unitsSkillsJsonArray.getJSONObject(i).getInt("id")));
						skill.setName(jsonSkill.getString("name"));

						JSONArray effectsArray = jsonSkill.getJSONArray("effects");
						skill.setEffects(effectsArray.get(0).toString());

						character.getSkills().add(skill);
					}
				}

				characters.add(character);
			}
		}
		return characters;
	}
}

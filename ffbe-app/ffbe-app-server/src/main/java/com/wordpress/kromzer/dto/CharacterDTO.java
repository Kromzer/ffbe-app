package com.wordpress.kromzer.dto;

import java.util.ArrayList;
import java.util.List;

/**
 * Class used to display an character.
 */
public class CharacterDTO {

	/** Character id. */
	private String id;

	/** The image byte array. */
	private byte[] imageByteArray;

	/** The character name. */
	private String name;

	/** List of characters skills. */
	private List<SkillDTO> skills;

	/** Default constructor. */
	public CharacterDTO() {
		skills = new ArrayList<>();
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the imageByteArray
	 */
	public byte[] getImageByteArray() {
		return imageByteArray;
	}

	/**
	 * @param imageByteArray the imageByteArray to set
	 */
	public void setImageByteArray(byte[] imageByteArray) {
		this.imageByteArray = imageByteArray;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the skills
	 */
	public List<SkillDTO> getSkills() {
		return skills;
	}

	/**
	 * @param skills the skills to set
	 */
	public void setSkills(List<SkillDTO> skills) {
		this.skills = skills;
	}
}

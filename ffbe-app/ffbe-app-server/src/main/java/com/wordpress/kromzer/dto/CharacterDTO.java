package com.wordpress.kromzer.dto;

/**
 * Class used to display an character.
 */
public class CharacterDTO {

	/** The image byte array. */
	private byte[] imageByteArray;

	/** The character name. */
	private String name;

	/** Default constructor. */
	public CharacterDTO() {

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
}

package com.wordpress.kromzer.dto;

/** Class representing a skill. */
public class SkillDTO {

	/** Skill id. */
	private String id;

	/** Skill name. */
	private String name;

	/** Skill effect(s). */
	private String effects;

	/** Default constructor. */
	public SkillDTO() {

	}

	/**
	 * @return the id
	 */
	public final String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public final void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public final String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public final void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the effects
	 */
	public final String getEffects() {
		return effects;
	}

	/**
	 * @param effects the effects to set
	 */
	public final void setEffects(String effects) {
		this.effects = effects;
	}
}

package com.jbdev.fooddeliver.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.jbdev.fooddeliver.entities.utils.EntityDefaults;


@SuppressWarnings("serial")
@Entity
@Table(name = "tb_product")
public class Product extends EntityDefaults {
	
	private String name;
	private Double price;
	private String description;
	private String imageUri;
	
	
	public Product() {}


	public Product(String name, Double price, String description, String imageUri) {
		super();
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImageUri() {
		return imageUri;
	}


	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}

	
}

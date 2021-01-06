package com.jbdev.fooddeliver.dto;

import java.util.Date;

import com.jbdev.fooddeliver.dto.utils.DTODefaults;
import com.jbdev.fooddeliver.entities.Product;

@SuppressWarnings("serial")
public class ProductDTO extends DTODefaults {

	private String name;
	private Double price;
	private String description;
	private String imageUri;
	
	public ProductDTO() {}

	public ProductDTO(Long id, Date createdAt, Date updatedAt, String name, Double price, String description, String imageUri) {
		this.setId(id);
		this.name = name;
		this.price = price;
		this.description = description;
		this.imageUri = imageUri;
		
	}
	
	public ProductDTO(Product product) {
		this.setId(product.getId());
		this.setCreatedAt(product.getCreatedAt());
		this.setUpdatedAt(product.getUpdatedAt());
		name = product.getName();
		price = product.getPrice();
		description = product.getDescription();
		imageUri = product.getImageUri();
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

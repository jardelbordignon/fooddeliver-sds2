package com.jbdev.fooddeliver.dto;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.jbdev.fooddeliver.dto.utils.DTODefaults;
import com.jbdev.fooddeliver.entities.Order;
import com.jbdev.fooddeliver.entities.OrderStatus;

@SuppressWarnings("serial")
public class OrderDTO extends DTODefaults {

	private String address;
	private Double latitude;
	private Double longitude;
	//private Instant moment; // utilizei o created_at e updated_at gerados automaticamente
	private OrderStatus status;
	
	private List<ProductDTO> products = new ArrayList<>();
	
	public OrderDTO() {}

	public OrderDTO(Long id, String address, Double latitude, Double longitude, OrderStatus status) {
		super();
		this.setId(id);
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.status = status;
	}
	
	public OrderDTO(Order order) {
		this.setId(order.getId());
		this.setCreatedAt(order.getCreatedAt());
		this.setUpdatedAt(order.getUpdatedAt());
		address = order.getAddress();
		latitude = order.getLatitude();
		longitude = order.getLongitude();
		status = order.getStatus();
		products = order.getProducts().stream().map(item -> new ProductDTO(item)).collect(Collectors.toList());
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	public List<ProductDTO> getProducts() {
		return products;
	}
	
	
}

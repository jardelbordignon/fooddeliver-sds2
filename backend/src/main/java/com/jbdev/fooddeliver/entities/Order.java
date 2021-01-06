package com.jbdev.fooddeliver.entities;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.jbdev.fooddeliver.entities.utils.EntityDefaults;

@SuppressWarnings("serial")
@Entity
@Table(name = "tb_order")
public class Order extends EntityDefaults {
	
	private String address;
	private Double latitude;
	private Double longitude;
	//private Instant moment; // utilizei o created_at e updated_at gerados automaticamente
	private OrderStatus status;
	
	//Set não aceita repetição, não pode ter produto repetido no pedido
	@ManyToMany
	@JoinTable(
		name = "tb_order_product",
		joinColumns = @JoinColumn(name = "order_id"),
		inverseJoinColumns = @JoinColumn(name = "product_id")
	)
	private Set<Product> products = new HashSet<>();
	
	public Order() {}

	public Order(Long id, String address, Double latitude, Double longitude, OrderStatus status) {
		this.setId(id);
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.status = status;
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

	public Set<Product> getProducts() {
		return products;
	}
	
}

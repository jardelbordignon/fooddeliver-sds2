package com.jbdev.fooddeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jbdev.fooddeliver.entities.Order;
import com.jbdev.fooddeliver.entities.Product;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}

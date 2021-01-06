package com.jbdev.fooddeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jbdev.fooddeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products "
			+ " where obj.status = 0  ORDER BY obj.createdAt")
	List<Order> findOrdersWithProducts();
	
}

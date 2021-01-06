package com.jbdev.fooddeliver.services;

import com.jbdev.fooddeliver.dto.OrderDTO;
import com.jbdev.fooddeliver.entities.Order;
import com.jbdev.fooddeliver.repositories.OrderRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map( item -> new OrderDTO(item) ).collect(Collectors.toList());
	}
	
}

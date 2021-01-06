package com.jbdev.fooddeliver.services;

import com.jbdev.fooddeliver.dto.OrderDTO;
import com.jbdev.fooddeliver.dto.ProductDTO;
import com.jbdev.fooddeliver.entities.Order;
import com.jbdev.fooddeliver.entities.OrderStatus;
import com.jbdev.fooddeliver.entities.Product;
import com.jbdev.fooddeliver.repositories.OrderRepository;
import com.jbdev.fooddeliver.repositories.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map( item -> new OrderDTO(item) ).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO save(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), OrderStatus.PENDING);
		// associando os produtos ao pedido
		for (ProductDTO prodDTO : dto.getProducts()) {
			Product product = productRepository.getOne(prodDTO.getId());
			order.getProducts().add(product);
		}
		
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
	
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		
		return new OrderDTO(order);
	}
	
}

package com.jbdev.fooddeliver.services;

import com.jbdev.fooddeliver.dto.ProductDTO;
import com.jbdev.fooddeliver.entities.Product;
import com.jbdev.fooddeliver.repositories.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByName();
		return list.stream().map( item -> new ProductDTO(item) ).collect(Collectors.toList());
	}
	
}

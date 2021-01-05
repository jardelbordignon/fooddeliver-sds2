package com.jbdev.fooddeliver.dto.utils;

import java.time.LocalDateTime;

@SuppressWarnings("serial")
public abstract class DTODefaults extends DTOId {


	private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

	public LocalDateTime getCreatedAt() { return createdAt; }

	public void setCreatedAt(LocalDateTime at) { createdAt = at; }

	public LocalDateTime getUpdatedAt() { return updatedAt; }

	public void setUpdatedAt(LocalDateTime at) { updatedAt = at; }

    
}
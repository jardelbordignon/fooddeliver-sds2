package com.jbdev.fooddeliver.dto.utils;

import java.util.Date;

@SuppressWarnings("serial")
public abstract class DTODefaults extends DTOId {

	private Date createdAt;

    private Date updatedAt;

	public Date getCreatedAt() { return createdAt; }

	public void setCreatedAt(Date at) { createdAt = at; }

	public Date getUpdatedAt() { return updatedAt; }

	public void setUpdatedAt(Date at) { updatedAt = at; }

    
}
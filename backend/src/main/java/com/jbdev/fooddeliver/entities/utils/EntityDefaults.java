package com.jbdev.fooddeliver.entities.utils;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
//import org.springframework.format.annotation.DateTimeFormat;
//import org.springframework.format.annotation.DateTimeFormat.ISO;

//import com.fasterxml.jackson.annotation.JsonIgnore;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@SuppressWarnings("serial")
public abstract class EntityDefaults extends EntityId {

	//@JsonIgnore
    //@DateTimeFormat(iso = ISO.DATE_TIME)
	@Column(
		columnDefinition="TIMESTAMP WITH TIME ZONE default current_timestamp",
		insertable = false, 
		updatable = false
	)
    private Date createdAt;

	//@JsonIgnore
    //@DateTimeFormat(iso = ISO.DATE_TIME)
    @Column(
    	columnDefinition="TIMESTAMP WITH TIME ZONE default current_timestamp",
    	insertable = false
    )
    private Date updatedAt;

	public Date getCreatedAt() { return createdAt; }

	public void setCreatedAt(Date at) { createdAt = at; }

	public Date getUpdatedAt() { return updatedAt; }

	public void setUpdatedAt(Date at) { updatedAt = at; }

    
}

package com.jbdev.fooddeliver.entities.utils;

import java.io.Serializable;

import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

// @MappedSuperclass informa que esta é uma superclasse, NÃO está diretamente ligada a uma tabela
// Suas subclasses SIM estarão ligadas à tabelas
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)

public abstract class EntityId implements Serializable {

	private static final long serialVersionUID = 1L;
	
	 //@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    //@GenericGenerator(name = "native", strategy = "native")
	//@GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	public void setId(Long id) { this.id = id; }
	
	public Long getId() { return id; }

	public boolean hasNoId() {	return id == null; }

	public boolean hasId() { return id != null;	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		EntityId other = (EntityId) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return String.format("Entidade: %s id: %s", this.getClass().getName(), getId());
	}
    
}

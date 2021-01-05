package com.jbdev.fooddeliver.dto.utils;

import java.io.Serializable;

public abstract class DTOId implements Serializable {

	private static final long serialVersionUID = 1L;
	
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
		DTOId other = (DTOId) obj;
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
package com.ApiVevicule.groupe5.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ApiVevicule.groupe5.Entity.Vehicule;



@Repository
public interface VehiculeRepository extends JpaRepository<Vehicule, Integer> {
	
	@Query(value = "SELECT * FROM vehicule WHERE num_register LIKE %?1% ", nativeQuery = true)
	public List<Vehicule> findByNumRegister(String numRegister);
	
	@Query(value = "SELECT * FROM vehicule WHERE rental_Price LIKE %?1% ", nativeQuery = true)
	public List<Vehicule> findByRentalPrice(double prix);
}

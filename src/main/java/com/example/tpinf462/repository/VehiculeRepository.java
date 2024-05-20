package com.example.tpinf462.repository;

import com.example.tpinf462.domaine.Voiture1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface VehiculeRepository extends JpaRepository<Voiture1, Long> {
    Optional<Voiture1> findByRegistratioNumberVehicule(String  registratioNumberVehicule);
    Optional<Voiture1>findByRentalPriceVehicule(double rentalPriceVehicule);
    Optional<Voiture1>findById(Long id);
}

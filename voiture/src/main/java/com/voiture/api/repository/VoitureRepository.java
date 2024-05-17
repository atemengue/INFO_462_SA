package com.voiture.api.repository;


import com.voiture.api.model.Voiture;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface VoitureRepository extends JpaRepository <Voiture,Long> {
    Voiture findByRegistrationNumber(String registrationNumber);
    List<Voiture>findByRentalPriceLessThanEqual(double maxPrice);
}

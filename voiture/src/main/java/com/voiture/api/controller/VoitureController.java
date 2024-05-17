package com.voiture.api.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.voiture.api.model.Voiture;
import com.voiture.api.repository.VoitureRepository;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VoitureController {
    @Autowired
    VoitureRepository voitureRepository;

    @GetMapping("/vehicles")
    public List<Voiture> getAllVoiture() {
        return voitureRepository.findAll();
    }

    @PostMapping("/vehicle")
    public Voiture createVoiture(@RequestBody Voiture note) {
        return voitureRepository.save(note);
    }

    @GetMapping("/vehicle/{id}")
    public Optional<Voiture> getVoitureById(@PathVariable(value = "id") Long noteId) {
        return voitureRepository.findById(noteId);
    }
    @GetMapping("/vehicle/search/{registrationNumber}")
    public Voiture getVoitureByRegistrationNumber(@PathVariable(value = "registrationNumber") String registrationNumber) {
        return voitureRepository.findByRegistrationNumber(registrationNumber);
    }

    @GetMapping("/vehicles/price/{maxprice}")
    public List<Voiture> getVoitureByRegistrationNumber(@PathVariable(value = "maxprice") double maxprice) {
        return voitureRepository.findByRentalPriceLessThanEqual(maxprice);
    }

    @PutMapping("/vehicle/{id}")
    public Voiture updateVoiture(@PathVariable(value = "id") Long noteId,
                            @RequestBody Voiture voitureDetails) {

        Optional<Voiture> voiture = voitureRepository.findById(noteId);

        voiture.get().setRegistrationNumber(voitureDetails.getRegistrationNumber());
        voiture.get().setMake(voitureDetails.getMake());
        voiture.get().setModel(voitureDetails.getModel());
        voiture.get().setRentalPrice(voitureDetails.getRentalPrice());

        Voiture updatedVoiture = voitureRepository.save(voiture.get());
        return updatedVoiture;
    }

    @DeleteMapping("/vehicle/{id}")
    public ResponseEntity<?> deleteVoiture(@PathVariable(value = "id") Long noteId) {
        Optional<Voiture> voiture = voitureRepository.findById(noteId);

        voitureRepository.delete(voiture.get());

        return ResponseEntity.ok().build();
    }
}

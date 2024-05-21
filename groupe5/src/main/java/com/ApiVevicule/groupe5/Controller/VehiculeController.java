package com.ApiVevicule.groupe5.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ApiVevicule.groupe5.Entity.Vehicule;
import com.ApiVevicule.groupe5.Service.VehiculeService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class VehiculeController {
	
	@Autowired
	private VehiculeService vehiculeService;
	
	@PostMapping("/create")
	public Vehicule CreateVehicule(@RequestBody Vehicule vehicule) {
		
		return vehiculeService.createVehicule(vehicule);
				
	}
	@GetMapping("/vehicules")
	public List<Vehicule> getAllVehicule(){
		
		return vehiculeService.getAllVehicule();
		
	}
	@GetMapping("/vehicule/search/{numRegister}")
	public List<Vehicule> getVehicule(@PathVariable String numRegister){
		
		return vehiculeService.SearchByNumRegister(numRegister);
		
	}
	
	@GetMapping("/vehicule/searchByPrix/{rental_Price}")
	public List<Vehicule> getVehiculePrice(@PathVariable double rental_Price){
		
		return vehiculeService.SearchByRentalPrice(rental_Price);
		
	}

	@PutMapping("/update/{id}")
	public Vehicule UpdateVehicule(@PathVariable int id, @RequestBody Vehicule vehicule) {
		return vehiculeService.UpadateVehicule(id, vehicule);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public String DeleteVehicule(@PathVariable int id) {
		return vehiculeService.DeleteVehicule(id);
	}
	@GetMapping("/")
    public String home() {
        return "redirect:/swagger-ui/index.html";
    }
}

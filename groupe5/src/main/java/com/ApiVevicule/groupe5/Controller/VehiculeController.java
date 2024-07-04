package com.ApiVevicule.groupe5.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ApiVevicule.groupe5.Entity.Vehicule;
import com.ApiVevicule.groupe5.Service.VehiculeService;
import com.ApiVevicule.groupe5.JwtUtil;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class VehiculeController {
	
	@Autowired
	private VehiculeService vehiculeService;
	
	@Autowired
    private JwtUtil jwtUtil;
	
	private boolean validateToken(String token) {
        return jwtUtil.validateToken(token);
    }

	@PostMapping("/create")
	public Vehicule CreateVehicule(@RequestBody Vehicule vehicule, @RequestHeader("Authorization") String token) {
		if(validateToken(token)) {
			return vehiculeService.createVehicule(vehicule);
		}
		throw new RuntimeException("Token invalide");
	}
	@GetMapping("/vehicules")
	public List<Vehicule> getAllVehicule(@RequestHeader("Authorization") String token){
		if(validateToken(token)) {
			return vehiculeService.getAllVehicule();
		}
		throw new RuntimeException("Token invalide");
	}
	@GetMapping("/vehicule/search/{numRegister}")
	public List<Vehicule> getVehicule(@PathVariable String numRegister, @RequestHeader("Authorization") String token){
		if(validateToken(token)) {
			return vehiculeService.SearchByNumRegister(numRegister);
		}
		throw new RuntimeException("Token invalide");
	}
	
	@GetMapping("/vehicule/searchByPrix/{rental_Price}")
	public List<Vehicule> getVehiculePrice(@PathVariable double rental_Price, @RequestHeader("Authorization") String token){
		if(validateToken(token)) {
			return vehiculeService.SearchByRentalPrice(rental_Price);
		}
		throw new RuntimeException("Token invalide");
	}

	@PutMapping("/update/{id}")
	public Vehicule UpdateVehicule(@PathVariable int id, @RequestBody Vehicule vehicule, @RequestHeader("Authorization") String token) {
		if(validateToken(token)) {
			return vehiculeService.UpadateVehicule(id, vehicule);
		}
		throw new RuntimeException("Token invalide");
	}
	
	@DeleteMapping("/delete/{id}")
	public String DeleteVehicule(@PathVariable int id, @RequestHeader("Authorization") String token) {
		if(validateToken(token)) {
			return vehiculeService.DeleteVehicule(id);
		}
		throw new RuntimeException("Token invalide");
	}
	@GetMapping("/")
    public String home() {
        return "redirect:/swagger-ui/index.html";
    }
}

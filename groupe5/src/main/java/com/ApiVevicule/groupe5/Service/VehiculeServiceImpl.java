package com.ApiVevicule.groupe5.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ApiVevicule.groupe5.Entity.Vehicule;
import com.ApiVevicule.groupe5.Repository.VehiculeRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class VehiculeServiceImpl implements VehiculeService{
	
	@Autowired
	private VehiculeRepository vehiculeRepository;

	@Override
	public Vehicule createVehicule(Vehicule vehicule) {
		// TODO Auto-generated method stub
		return vehiculeRepository.save(vehicule);
	}

	@Override
	public List<Vehicule> getAllVehicule() {
		// TODO Auto-generated method stub
		return vehiculeRepository.findAll();
	}

	@Override
	public Vehicule UpadateVehicule(int id, Vehicule vehicule) {
		// TODO Auto-generated method stub
		return vehiculeRepository.findById(id)
				.map(v-> {
					v.setRentalPrice(vehicule.getRentalPrice());
					v.setMake(vehicule.getMake());
					v.setModel(vehicule.getModel());
					v.setNumRegister(vehicule.getNumRegister());
					v.setYear(vehicule.getYear());
					return vehiculeRepository.save(v);
					
				}).orElseThrow(()-> new RuntimeException("Véhicule non trouvé"));
	}

	@Override
	public String DeleteVehicule(int id) {
		// TODO Auto-generated method stub
		 vehiculeRepository.deleteById(id);
		 return "Véhicule supprimé";
		
		}
	@Override
	public List<Vehicule> SearchByRentalPrice(double price) {
		if(price != 0) {
			return (List<Vehicule>) vehiculeRepository.findAll();
		}
		return vehiculeRepository.findByRentalPrice(price);
		
	}
	
	@Override
	public List<Vehicule> SearchByNumRegister(String numRegister) {
		if(numRegister != null) {
			return vehiculeRepository.findByNumRegister(numRegister);
		}
		
		return (List<Vehicule>) vehiculeRepository.findAll();
	}

}

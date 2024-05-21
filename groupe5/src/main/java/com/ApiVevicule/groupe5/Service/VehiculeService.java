package com.ApiVevicule.groupe5.Service;

import java.util.List;

import com.ApiVevicule.groupe5.Entity.Vehicule;


public interface VehiculeService {
	
	Vehicule createVehicule(Vehicule vehicule);
	List<Vehicule> getAllVehicule();
	Vehicule UpadateVehicule(int id, Vehicule vehicule);
	String DeleteVehicule(int id);
	List<Vehicule> SearchByNumRegister(String numRegister);
	List<Vehicule> SearchByRentalPrice(double prix);
	

}

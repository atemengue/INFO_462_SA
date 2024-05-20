package com.example.tpinf462.mapper;

import com.example.tpinf462.domaine.Voiture1;
import com.example.tpinf462.dto.VehiculeDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

/*@Service
public class VehiculeMapperImpl {
    public VehiculeDTO mapToEntity(Vehicule vehicule){
        VehiculeDTO vehiculeDTO=new VehiculeDTO();
        BeanUtils.copyProperties(vehiculeDTO,vehicule);
        return vehiculeDTO;
    }
    public Vehicule mapToDTO(VehiculeDTO vehiculeDTO){
        Vehicule vehicule=new Vehicule();
        BeanUtils.copyProperties(vehicule ,vehiculeDTO);
        return vehicule;
    }


}*/
@Service
public class VehiculeMapperImpl {
    public VehiculeDTO mapToDTO(Voiture1 vehicule){
        VehiculeDTO vehiculeDTO = new VehiculeDTO();
        BeanUtils.copyProperties(vehicule, vehiculeDTO);
        return vehiculeDTO;
    }

    public Voiture1 mapToEntity(VehiculeDTO vehiculeDTO){
        Voiture1 vehicule = new Voiture1();
        BeanUtils.copyProperties(vehiculeDTO, vehicule);
        return vehicule;
    }
}


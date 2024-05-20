package com.example.tpinf462.web;

import com.example.tpinf462.dto.VehiculeDTO;
import com.example.tpinf462.service.VehiculeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class VehiculeController {
    private VehiculeService vehiculeService;


    @PostMapping("/vehicules")
  public ResponseEntity<Object> ajoutervehicule(@RequestBody VehiculeDTO vehicule){
        if(vehiculeService!=null){
            vehiculeService.create(vehicule);
          return   ResponseEntity.ok().build();
        }else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("vehiculeservice is null");
        }

    }
    @GetMapping("/vehicules")
    @ResponseBody
    public List<VehiculeDTO> getvehicule(){
     return vehiculeService.findALL();
    }
    @DeleteMapping("vehicules/{id}")
    public void deletevehicule(@PathVariable Long id){
        vehiculeService.delete(id);
    }
    @PutMapping("vehicules/{id}")
    public VehiculeDTO uploadVehicule(@PathVariable Long id, @RequestBody VehiculeDTO vehiculeDTO){
        vehiculeDTO.setId(id);
       return vehiculeService.uploadvehicule(vehiculeDTO);
    }
    @GetMapping("/vehicules/registration/{registration}")
    public VehiculeDTO getByRegistration(@PathVariable String registration) {
        VehiculeDTO vehiculeDTO = vehiculeService.getByregistration(registration);
        return vehiculeDTO;
    }

    @GetMapping("/vehicules/rentalPrice{rentalPrice}")
    public VehiculeDTO getByPrice(@PathVariable double rentalPrice) {
        VehiculeDTO vehiculeDTO = vehiculeService.getByprice(rentalPrice);
       return vehiculeDTO;
    }
    @GetMapping("/vehiciles/{id}")
    public Optional<VehiculeDTO> grtById(@PathVariable Long id){
        Optional<VehiculeDTO> vehiculeDTO=vehiculeService.getById(id);
        return vehiculeDTO;
    }

}

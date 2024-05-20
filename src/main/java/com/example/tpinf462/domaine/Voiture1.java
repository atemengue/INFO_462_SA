package com.example.tpinf462.domaine;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;







import java.util.Date;
@Entity
@Table(name = "voiture1")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Voiture1 implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String make;


    private String model;


    private String registratioNumberVehicule;


    private Float rentalPriceVehicule;


    private Date yeaVehicule;

    // Getters and setters
}

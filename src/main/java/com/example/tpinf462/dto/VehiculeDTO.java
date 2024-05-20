package com.example.tpinf462.dto;

import java.time.LocalDate;
import java.util.Date;

import lombok.*;
@Data

public class VehiculeDTO {
    private Long id;


    private String make;


    private String model;


    private String registratioNumberVehicule;


    private Float rentalPriceVehicule;


    private Date yeaVehicule;

}

from django.db import models


class Vehicle(models.Model):
    #The registration number of the vehicle
    registration_number = models.CharField(max_length=20, unique=True)
    # description : The make of the vehicle
    make = models.CharField(max_length=50)
    # The model of the vehicle
    model = models.CharField(max_length=50)
    # The year the vehicle was made
    year = models.PositiveIntegerField()
    # The rental price of the vehicle
    rental_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.make} {self.model} ({self.registration_number})"
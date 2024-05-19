from django.db import models

# Create your models here.


class Vehicle(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    rentalPrice = models.IntegerField()
    registrationNumber = models.CharField(max_length=100)
    # Ajoutez d'autres champs selon vos besoins

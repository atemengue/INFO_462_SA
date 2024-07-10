from django.db import models
import logging
# Create your models here.
class Vehicle(models.Model):
    RegNum = models.CharField(max_length=50, primary_key=True, blank=False)
    mark = models.CharField(max_length=50, blank=False)
    model = models.CharField(max_length=50, blank=False)
    year = models.DateField(blank=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False)

    def __str__(self):
        return self.RegNum
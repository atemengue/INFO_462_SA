from django.contrib import admin
from .models import Vehicle

# Register your models here.
@admin.register(Vehicle)
class Vehicle(admin.ModelAdmin):
    list_display = ('RegNum', 'mark', 'model', 'year', 'price')
# Dans votre fichier forms.py
from django import forms
from .models import Vehicle

class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = ['make', 'model', 'year' , 'rentalPrice' , 'registrationNumber']  # Liste des champs que vous souhaitez afficher dans le formulaire

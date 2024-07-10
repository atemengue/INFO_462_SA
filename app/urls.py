from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VehicleList, VehicleDetailView

# Création d'un routeur pour les vues de l'API

urlpatterns = [
    path('', VehicleList.as_view()),
    path('<str:RegNum>', VehicleDetailView.as_view())
]

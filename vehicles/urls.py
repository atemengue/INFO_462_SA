from django.urls import path
from .views import VehicleList, VehicleDetailView


urlpatterns = [
    path('', VehicleList.as_view()),
    path('<str:RegNum>', VehicleDetailView.as_view()),
]

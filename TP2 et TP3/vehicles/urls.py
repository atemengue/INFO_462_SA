from django.urls import path
from .views import *



urlpatterns = [
    
    path('', show, name='show'),
    path('create/', create_vehicle, name='create_vehicle'),
    path('vehicles/<int:vehicle_id>/', get_vehicle, name='get_vehicle'),
    path('vehicles/<int:vehicle_id>/update/', update_vehicle, name='update_vehicle'),
    path('vehicles/<int:vehicle_id>/delete/', delete_vehicle, name='delete_vehicle'),
    path('vehicles/registration/<str:registration_number>/', search_by_registration, name='search_by_registration'),
    path('vehicles/price/<int:max_price>/', search_by_price, name='search_by_price'),
]

from django.shortcuts import render, get_object_or_404,redirect

# Create your views here.
from django.http import JsonResponse
from .models import Vehicle
from django.views.decorators.csrf import csrf_exempt
import json
from .forms import VehicleForm

def show(request):
    
        data = {'vehicles': Vehicle.objects.all()}
        return render(request,"vehicles/show.html", data)


def get_vehicle(request, vehicle_id):
    
        vehicle = Vehicle.objects.all()
        data = {'vehicle': get_object_or_404(Vehicle,pk=vehicle_id)}
        return render(request,"vehicles/index.html", data)
   

# d

# Dans votre fichier views.py
def create_vehicle(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
        if form.is_valid():
            form.save()  # Enregistre les données dans la base de données
            return redirect('show')  # Redirige vers la page d'accueil après l'ajout
    else:
        form = VehicleForm()
    return render(request, "vehicles/ajout.html", {"form": form})



# @csrf_exempt
# def create_vehicle(request):
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         vehicle = Vehicle.objects.create(
#             brand=data['brand'],
#             model=data['model'],
#             year=data['year']
#             # Ajoutez d'autres champs si nécessaire
#         )
#         return JsonResponse({'success': 'Vehicle created successfully'}, status=201)
#     else:
#         return JsonResponse({'error': 'Method not allowed'}, status=405)
    

@csrf_exempt
def update_vehicle(request, vehicle_id):
    vehicle = Vehicle.objects.get(pk = vehicle_id)
    if request.method == 'POST':
        form = VehicleForm(request.POST, instance = vehicle)
        if form.is_valid():
            form.save()  # Enregistre les données dans la base de données
            return redirect('show')  # Redirige vers la page d'accueil après l'ajout
    else:
        form = VehicleForm(instance = vehicle )
    return render(request, "vehicles/ajout.html", {"form": form}) 
    


def delete_vehicle(request, vehicle_id):
    
        vehicle = Vehicle.objects.get(pk = vehicle_id)
        vehicle.delete()
        return redirect('show')
    
    
def search_by_registration(request, registration_number):
    try:
        vehicle = Vehicle.objects.get(registration_number=registration_number)
        data = {'vehicle': model_to_dict(vehicle)}
        return JsonResponse(data)
    except Vehicle.DoesNotExist:
        return JsonResponse({'error': 'Vehicle not found'}, status=404)
    

def search_by_price(request, max_price):
    vehicles = Vehicle.objects.filter(price__lte=max_price)
    data = {'vehicles': list(vehicles.values())}
    return JsonResponse(data)
from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Vehicle
from .serializers import VehicleSerializer

class VehicleViewSet(viewsets.ModelViewSet):
    # Définir l'ensemble des véhicules
    queryset = Vehicle.objects.all()
    
    # Spécifier le sérialiseur à utiliser
    serializer_class = VehicleSerializer
    
    # Activer le filtrage pour la recherche
    filter_backends = [filters.SearchFilter]
    
    # Champ de recherche autorisé
    search_fields = ['registration_number']

    # Action personnalisée pour la recherche par prix de location
    @action(detail=False, methods=['get'], url_path='search-by-price')
    def search_by_price(self, request):
        # Obtenir les paramètres de requête min_price et max_price
        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')
        
        # Filtrer les véhicules en fonction des prix spécifiés
        if min_price is not None and max_price is not None:
            vehicles = Vehicle.objects.filter(rental_price__gte=min_price, rental_price__lte=max_price)
        elif min_price is not None:
            vehicles = Vehicle.objects.filter(rental_price__gte=min_price)
        elif max_price is not None:
            vehicles = Vehicle.objects.filter(rental_price__lte=max_price)
        else:
            vehicles = Vehicle.objects.all()
        
        # Sérialiser les données des véhicules filtrés
        serializer = VehicleSerializer(vehicles, many=True)
        
        # Retourner la réponse avec les données sérialisées
        return Response(serializer.data)

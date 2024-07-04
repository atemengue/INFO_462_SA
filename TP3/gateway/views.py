import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated

class VehicleListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = requests.get('http://localhost:800/vehicles/', headers={'Authorization': f'Bearer {request.auth.token}'})
        return Response(response.json(), status=response.status_code)

    def post(self, request):
        response = requests.post('http://localhost:8000/vehicles/', json=request.data, headers={'Authorization': f'Bearer {request.auth.token}'})
        return Response(response.json(), status=response.status_code)

class VehicleDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        response = requests.get(f'http://localhost:8000/vehicles/{pk}/', headers={'Authorization': f'Bearer {request.auth.token}'})
        return Response(response.json(), status=response.status_code)

    def put(self, request, pk):
        response = requests.put(f'http://localhost:8000/vehicles/{pk}/', json=request.data, headers={'Authorization': f'Bearer {request.auth.token}'})
        return Response(response.json(), status=response.status_code)

    def delete(self, request, pk):
        response = requests.delete(f'http://localhost:8000/vehicles/{pk}/', headers={'Authorization': f'Bearer {request.auth.token}'})
        return Response(response.json(), status=response.status_code)

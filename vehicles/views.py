from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Vehicle
from .serializers import VehicleSerializer
from rest_framework import permissions


class VehicleList(ListCreateAPIView):

    serializer_class = VehicleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return Vehicle.objects.filter(vehicle=self.request.vehicle)


class VehicleDetailView(RetrieveUpdateDestroyAPIView):

    serializer_class = VehicleSerializer
    permission_classes = (permissions.IsAuthenticated,)
    lookup_field = "RegNum"

    def get_queryset(self):
        return Vehicle.objects.all()

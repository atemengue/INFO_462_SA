from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Vehicle
from .serializers import VehicleSerializer
from rest_framework import permissions


class VehicleList(ListCreateAPIView):

    serializer_class = VehicleSerializer

    def perform_create(self, serializer):
        serializer.save()

    def get_queryset(self):
        return Vehicle.objects.filter()


class VehicleDetailView(RetrieveUpdateDestroyAPIView):

    serializer_class = VehicleSerializer
    lookup_field = 'RegNum'

    def get_queryset(RegNum):
        return Vehicle.objects.filter()

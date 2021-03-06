from django.shortcuts import render
from rest_framework import viewsets, filters

from .serializers import StudentSerializer, DebtToEarningsDataSerializer
from .models import Student, DebtToEarningsData

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('name')
    serializer_class = StudentSerializer

class DebtToEarningsDataViewSet(viewsets.ModelViewSet):
    queryset = DebtToEarningsData.objects.all().order_by('institutionName')
    serializer_class = DebtToEarningsDataSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['institutionName', '^zip']

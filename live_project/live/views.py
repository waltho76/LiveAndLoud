from django.shortcuts import render
from rest_framework import generics
from .models import City, Venue, Genre, Band
from .serializers import CitySerializer, VenueSerializer, GenreSerializer, BandSerializer
# Create your views here.

class CityList(generics.ListCreateAPIView):
    queryset = City.objects.all()  
    serializer_class = CitySerializer

class VenueList(generics.ListCreateAPIView):
    queryset = Venue.objects.all()    
    serializer_class = VenueSerializer

class GenreList(generics.ListCreateAPIView):
    queryset = Genre.objects.all()    
    serializer_class = GenreSerializer

class BandList(generics.ListCreateAPIView):
    queryset = Band.objects.all()    
    serializer_class = BandSerializer

class CityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = City.objects.all()    
    serializer_class = CitySerializer

class VenueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venue.objects.all()    
    serializer_class = VenueSerializer

class GenreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()    
    serializer_class = GenreSerializer

class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Band.objects.all()    
    serializer_class = BandSerializer
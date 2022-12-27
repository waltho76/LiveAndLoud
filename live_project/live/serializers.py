from rest_framework import serializers
from .models import City, Venue, Genre, Band

class CitySerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name = 'venue_detail',
        many = True,
        read_only = True
    )
    band = serializers.HyperlinkedRelatedField(
        view_name ='band_detail',
        many = True,
        read_only = True
    )
    class Meta:
       model = City
       fields = ('id', 'photo_url', 'state', 'name', 'venue', 'band')

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    band = serializers.HyperlinkedRelatedField(
        view_name='city_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = Venue
       fields = ('id', 'photo_url', 'address', 'name', 'band', 'city',)

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    Genre = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = Genre
       fields = ('id', 'photo_url', 'name', 'genre')

class BandSerializer(serializers.HyperlinkedModelSerializer):
    Venue = serializers.HyperlinkedRelatedField(
        view_name='Band_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = City
       fields = ('id', 'photo_url', 'genre', 'name', 'venue',)

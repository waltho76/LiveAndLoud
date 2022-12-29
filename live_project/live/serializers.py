from rest_framework import serializers
from .models import City, Venue, Genre, Band

class CitySerializer(serializers.HyperlinkedModelSerializer):
    location = serializers.HyperlinkedRelatedField(
        view_name = 'city_detail',
        read_only = True
    )
    
    class Meta:
        model = City
        fields = ('id', 'location', 'name', 'photo_url',)
        lookup_field = 'location'
        
class VenueSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',
        # many = True,
        read_only=True
    )
    
    class Meta:
       model = Venue
       fields = ('id', 'city_id' ,'name', 'address', 'photo_url',)
       lookup_field = 'name'

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    name = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        read_only=True
    )
    class Meta:
       model = Genre
       fields = ('id', 'name', 'photo_url',)
       lookup_field = 'name'
       

class BandSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',       
        read_only=True
    )
    class Meta:
       model = Band
       fields = ('id', 'name', 'photo_url', 'genre_id', 'venue_id', 'venue')
       lookup_field = 'name'

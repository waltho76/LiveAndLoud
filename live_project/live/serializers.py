from rest_framework import serializers
from .models import City, Venue, Genre, Band

class CitySerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name = 'venue_detail',
        many = True,
        read_only = True
    )
    band_url = serializers.ModelSerializer.serializer_url_field(
        view_name ='band_detail',
        many = True,
        read_only = True
    )
    class Meta:
       model = City
       fields = '__all__'

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    band = serializers.HyperlinkedRelatedField(
        view_name='CityDetail',
        many=True,
        read_only=True
    )
    
    class Meta:
       model = Venue
       fields = '__all__'

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    Genre = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = Genre
       fields = '__all__'

class BandSerializer(serializers.HyperlinkedModelSerializer):
    Venue = serializers.HyperlinkedRelatedField(
        view_name='Band_detail',
        many=True,
        read_only=True
    )
    class Meta:
       model = City
       fields = '__all__'
from rest_framework import serializers
from .models import City, Venue, Genre, Band

class CitySerializer(serializers.HyperlinkedModelSerializer):
    cityid = serializers.HyperlinkedRelatedField(
        view_name = 'city_detail',
        read_only = True
    )    
    class Meta:
        model = City
        fields = ('cityid', 'id', 'location', 'name', 'photo_url',)
       
        
class VenueSerializer(serializers.HyperlinkedModelSerializer):
    venueid = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',        
        read_only=True
    )    
    class Meta:
       model = Venue
       fields = ('venueid','id', 'city_id' ,'name', 'address', 'photo_url',)


class GenreSerializer(serializers.HyperlinkedModelSerializer):
    genreid = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        read_only=True
    )
    class Meta:
       model = Genre
       fields = ('genreid','id', 'name', 'photo_url',)
    
       

class BandSerializer(serializers.HyperlinkedModelSerializer):
    bandid = serializers.HyperlinkedRelatedField(
        view_name='band_detail',  
        read_only=True       
    )
    class Meta:
       model = Band
       fields = ('bandid', 'id', 'name', 'photo_url', 'genre_id', 'venue_id',)
   
from django.db import models

# Create your models here.
class City(models.Model):
    cityid = models.CharField(max_length=100, default='null')
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Venue(models.Model):
    venueid = models.CharField(max_length=100, default='null')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='venue')
    name = models.CharField(max_length=100, default='venue name')
    address = models.CharField(max_length=100, default='address')
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Genre(models.Model):
    Genreid = models.CharField(max_length=100, default='null')
    name = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Band(models.Model):
    bandid = models.CharField(max_length=100, default='null')
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='band')
    venue_name = models.CharField(max_length=100, default='null')
    name = models.CharField(max_length=100, default='band name')
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, related_name='band')
    genre_name = models.CharField(max_length=100, default='null')
    photo_url = models.TextField()

    def __str__(self):
        return self.name


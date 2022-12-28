from django.db import models

# Create your models here.
class City(models.Model):
    name = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Venue(models.Model):
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='venue')
    name = models.CharField(max_length=100, default='venue name')
    address = models.CharField(max_length=100, default='address')
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Band(models.Model):
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='band')
    name = models.CharField(max_length=100, default='band name')
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, related_name='band')
    photo_url = models.TextField()

    def __str__(self):
        return self.name


from django.contrib import admin
from .models import City, Venue, Genre, Band

# Register your models here.

admin.site.register(City)
admin.site.register(Venue)
admin.site.register(Genre)
admin.site.register(Band)
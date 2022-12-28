# live/urls.py
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.CityList.as_view(), name='city_list'),
    path('city/<int:pk>', views.CityDetail.as_view(), name='city_detail'),
    path('venue/', views.VenueList.as_view(), name='venue_list'),
    path('venue/<int:pk>', views.VenueDetail.as_view(), name='venue_detail'),
    path('genre/', views.GenreList.as_view(), name='genre_list'),
    path('genre/<int:pk>', views.GenreDetail.as_view(), name='genre_detail'),
    path('band/', views.BandList.as_view(), name='band_list'),
    path('band/<int:pk>', views.BandDetail.as_view(), name='band_detail')
]
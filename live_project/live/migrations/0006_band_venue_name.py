# Generated by Django 4.1.4 on 2023-01-05 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('live', '0005_band_genre_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='band',
            name='venue_name',
            field=models.CharField(default='null', max_length=100),
        ),
    ]

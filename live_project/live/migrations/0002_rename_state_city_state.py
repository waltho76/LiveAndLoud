# Generated by Django 4.1.4 on 2022-12-28 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('live', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='city',
            old_name='State',
            new_name='state',
        ),
    ]

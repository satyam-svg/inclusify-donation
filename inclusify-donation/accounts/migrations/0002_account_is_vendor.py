# Generated by Django 5.0.1 on 2024-01-11 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='is_vendor',
            field=models.BooleanField(default=False),
        ),
    ]

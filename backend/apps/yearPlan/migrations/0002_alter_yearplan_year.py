# Generated by Django 3.2.7 on 2021-10-30 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yearPlan', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='yearplan',
            name='year',
            field=models.PositiveIntegerField(default=0, unique=True),
        ),
    ]

# Generated by Django 3.2.7 on 2021-11-29 23:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('workOrder', '0004_rename_datetime_workorder_datetimecreated'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workorder',
            name='FORG',
        ),
    ]

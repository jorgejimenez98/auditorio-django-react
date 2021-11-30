from django.db import models
from django.contrib.auth import get_user_model
from apps.yearPlan.models import YearPlan
from apps.workOrder.models import WorkOrder


class Inventory(models.Model):
    author = models.CharField(max_length=255)
    yearPlan = models.ForeignKey(YearPlan, on_delete=models.PROTECT, related_name='inventories')
    workOrder = models.OneToOneField(WorkOrder, on_delete=models.PROTECT, related_name='inventory')
    dateTimeCreate = models.DateTimeField(auto_now_add=True)

class InventoryItem(models.Model):
    inventory = models.ForeignKey(Inventory, on_delete=models.PROTECT, related_name='inventoryItems')
    sContCant = models.FloatField(default=0)
    sContTotal = models.FloatField(default=0)
    sSubCant = models.FloatField(default=0)
    sSubPrice = models.FloatField(default=0)
    sTeCant = models.FloatField(default=0)
    sTeTotal = models.FloatField(default=0)
    um = models.CharField(max_length=255)
    code = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    diff = models.FloatField(default=0)

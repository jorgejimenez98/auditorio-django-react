from django.db import models
from django.contrib.auth import get_user_model
from ..yearPlan.models import YearPlan


class WorkOrder(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)
    yearPlan = models.ForeignKey(
        YearPlan, on_delete=models.PROTECT, related_name='workOrders')
    noWO = models.PositiveSmallIntegerField(default=0)
    criteria = models.CharField(max_length=256)
    system = models.CharField(max_length=256)
    leader = models.CharField(max_length=256)
    auditor1 = models.CharField(max_length=256)
    auditor2 = models.CharField(max_length=256)
    entity = models.CharField(max_length=256)
    subordinated = models.CharField(max_length=256)
    address = models.CharField(max_length=256)
    province = models.CharField(max_length=256)
    municipality = models.CharField(max_length=256)
    NAE = models.CharField(max_length=256)
    financingForm = models.CharField(max_length=256)
    FORG = models.CharField(max_length=256)
    cubanStateEntrpSys = models.CharField(max_length=256)
    isPerfecting = models.BooleanField(default=False)
    merchantSociety = models.BooleanField(default=False)

    def __str__(self):
        return f"Work Order {self.id}"


class Directive(models.Model):
    text = models.CharField(max_length=128, default="")
    workOrders = models.ForeignKey(
        WorkOrder, on_delete=models.PROTECT, related_name='directives')

    def __str__(self):
        return self.text

from django.db import models
from django.contrib.auth import get_user_model
from ..yearPlan.models import YearPlan


class WorkOrder(models.Model):
    dateTimeCreated = models.DateTimeField(auto_now_add=True)
    author = models.CharField(max_length=255, default="")
    yearPlan = models.ForeignKey(YearPlan, on_delete=models.PROTECT, related_name='workOrders')
    noWO = models.PositiveSmallIntegerField(default=0)
    criteria = models.TextField(default="")
    system = models.CharField(max_length=256, default="")
    leader = models.CharField(max_length=256, default="")
    auditor1 = models.CharField(max_length=256, default="")
    auditor2 = models.CharField(max_length=256, default="")
    entity = models.CharField(max_length=256, default="")
    subordinated = models.CharField(max_length=256, default="")
    address = models.CharField(max_length=256, default="")
    province = models.CharField(max_length=256, default="")
    municipality = models.CharField(max_length=256, default="")
    NAE = models.CharField(max_length=256, default="")
    cubanStateEntrpSys = models.CharField(max_length=256, default="")
    isPerfecting = models.BooleanField(default=False)
    merchantSociety = models.BooleanField(default=False)
    codNIT = models.CharField(max_length=11, default="")
    codREEUP = models.CharField(max_length=8, default="")
    actionType = models.CharField(max_length=255, default="")
    unidadPress = models.BooleanField(default=False)
    cantAuditores = models.PositiveSmallIntegerField(default=0)
    diasHabiles = models.PositiveIntegerField(default=30)
    startDate = models.DateField(default=None, blank=True, null=True)
    endDate = models.DateField(default=None, blank=True, null=True)

    def __str__(self):
        return f"Work Order {self.id}"
    



class Directive(models.Model):
    text = models.CharField(max_length=128, default="")
    workOrders = models.ForeignKey(WorkOrder, on_delete=models.PROTECT, related_name='directives')

    def __str__(self):
        return self.text

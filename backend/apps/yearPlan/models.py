from django.db import models


class YearPlan(models.Model):
    year = models.PositiveIntegerField(default=0, unique=True)
    cantidadAudit = models.PositiveSmallIntegerField(default=0)
    diasAudit = models.PositiveSmallIntegerField(default=0)
    diasFeriad = models.PositiveSmallIntegerField(default=0)
    diasVacaciones = models.PositiveSmallIntegerField(default=0)
    diasCapacitacion = models.PositiveSmallIntegerField(default=0)
    diasReservas = models.PositiveSmallIntegerField(default=0)
    controlInterno = models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return f"Year {self.year} {self.cantidadAudit}"

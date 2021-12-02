from django.db import IntegrityError
from rest_framework.decorators import action
from .serializers import YearPlanSerializer, YearPlan, YearPlanMiniSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.extraPermissions import IsAuditor
from apps.errorMessages import *

class YearPlanViewSet(viewsets.ModelViewSet):
    queryset = YearPlan.objects.all().order_by('-year')
    serializer_class = YearPlanSerializer
    permission_classes = [IsAuthenticated, IsAuditor]

    @action(methods=['POST'], detail=False)
    def createYearPlan(self, request):
        data = request.data
        try:
            # Create Year Plan
            yearPlan = YearPlan.objects.create(
                year=int(data.get('year')),
                author=data.get('author'),
                cantidadAudit=int(data.get('cantidadAudit')),
                diasAudit=int(data.get('diasAudit')),
                diasFeriad=int(data.get('diasFeriad')),
                diasVacaciones=int(data.get('diasVacaciones')),
                diasCapacitacion=int(data.get('diasCapacitacion')),
                diasReservas=int(data.get('diasReservas')),
                controlInterno=int(data.get('controlInterno')),
            )
            # Return Response
            return Response({"yearPlanId": yearPlan.pk}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)


    @action(methods=['POST'], detail=False)
    def deleteYearPlan(self, request):
        data = request.data
        try:
            # Delete All Years Plans
            for yearPlan in data:
                yearPlanToDelete = YearPlan.objects.get(id=int(yearPlan.get('id')))
                yearPlanToDelete.delete()
            # Return Response
            return Response({"message": "Year Plan Deleted"}, status=status.HTTP_200_OK)
        except IntegrityError:
            message = getDeleteProtectedError("Ordenes de Trabajo")
            return Response({'detail': message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

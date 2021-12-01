from django.db import IntegrityError
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.extraPermissions import IsAuditor
from apps.yearPlan.models import YearPlan
from .serializers import WorkOrderMiniSerializer, WorkOrderSerializer, WorkOrder
from .models import Directive
from apps.errorMessages import *


class WorkOrderViewSet(viewsets.ModelViewSet):
    queryset = WorkOrder.objects.all().order_by('-pk')
    serializer_class = WorkOrderSerializer
    permission_classes = [IsAuthenticated, IsAuditor]

    @action(methods=['POST'], detail=False)
    def createWorkOrder(self, request):
        data = request.data
        try:
            # Get Year Plan Id
            yearPlan = YearPlan.objects.get(pk=int(data.get('yearPlanId')))
            # Create Work Order
            workOrder = WorkOrder.objects.create(
                yearPlan=yearPlan
            )
            # Update Work Order Params
            workOrder.author = data.get('author')
            workOrder.codNIT = data.get('codNIT')
            workOrder.codREEUP = data.get('codREEUP')
            workOrder.actionType = data.get('actionType')
            workOrder.unidadPres = data.get('unidadPres')
            workOrder.cantAuditores = data.get('cantAuditores')
            workOrder.diasHabiles = data.get('diasHabiles')
            workOrder.updateDates(data.get('startDate'))
            workOrder.save()
            # Create Directives
            for directive in data.get('directives'):
                Directive.objects.create(
                    text=directive,
                    workOrders=workOrder
                )
            # Return Response
            message = 'Work Order Created Successfully'
            return Response({'message': message}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['PUT'], detail=True)  # /api/workOrders/1/updateWorOrder/
    def updateWorOrder(self, request, pk):
        data = request.data
        try:
            # Get work Order
            workOrder = WorkOrder.objects.get(pk=pk)
            workOrder.author = data.get('author')
            workOrder.yearPlan = YearPlan.objects.get(
                pk=int(data.get('yearPlanId')))
            workOrder.noWO = int(data.get('noWO'))
            workOrder.criteria = data.get('criteria')
            workOrder.system = data.get('system')
            workOrder.auditType = data.get('auditType')
            workOrder.entity = data.get('entity')
            workOrder.subordinated = data.get('subordinated')
            workOrder.address = data.get('address')
            workOrder.province = data.get('province')
            workOrder.municipality = data.get('municipality')
            workOrder.NAE = data.get('NAE')
            workOrder.FORG = data.get('FORG')
            workOrder.cubanStateEntrpSys = data.get('cubanStateEntrpSys')
            workOrder.isPerfecting = data.get('isPerfecting')
            workOrder.merchantSociety = data.get('merchantSociety')
            workOrder.updateAuditors(data.get('staff'))
            workOrder.save()
            # Return Response
            message = 'Work Order Updated Successfully'
            return Response({'message': message}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['POST'], detail=False)
    def deleteWorkOrders(self, request):
        data = request.data
        try:
            for wo in data:
                workOrder = WorkOrder.objects.get(pk=int(wo.get('id')))
                """ Delete First all directives """
                for directive in workOrder.directives.all():
                    directive.delete()
                """ Delete work Order """
                workOrder.delete()
            # Return Response
            message = 'Work Orders Deleted Successfully'
            return Response({'message': message}, status=status.HTTP_200_OK)
        except IntegrityError:
            message = getDeleteProtectedError("Ordenes de Trabajo")
            return Response({'detail': message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db import IntegrityError
from apps.extraPermissions import IsAuditor
from .serializers import InventorySerializer, Inventory, InventoryItem
from apps.yearPlan.models import YearPlan
from apps.workOrder.models import WorkOrder


class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [IsAuthenticated, IsAuditor]

    @action(methods=['POST'], detail=False)
    def createInventory(self, request):
        data = request.data
        try:
            # Create Inventory
            inventory = Inventory.objects.create(
                author=data.get('author'),
                yearPlan=YearPlan.objects.get(pk=int(data.get('yearPlanId'))),
                workOrder=WorkOrder.objects.get(
                    pk=int(data.get('workOrderId'))),
            )
            # Create Inventory Items
            for element in data.get('element'):
                InventoryItem.objects.create(
                    inventory=inventory,
                    sContCant=float(element.get('SContCant')),
                    sContTotal=float(element.get('SContTotal')),
                    sSubCant=float(element.get('SSubCant')),
                    sSubPrice=float(element.get('SSubPrice')),
                    sTeCant=float(element.get('STECant')),
                    sTeTotal=float(element.get('STETotal')),
                    um=str(element.get('UM')),
                    code=str(element.get('code')),
                    description=str(element.get('description')),
                    diff=float(element.get('dif')),
                )
            # Return Response
            serializer = InventorySerializer(inventory, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)


    @action(methods=['DELETE'], detail=True)
    def deleteInventory(self, request, pk):
        try:
            # Get Inventory from request
            inventory = Inventory.objects.get(id=pk)
            # Delete Inventory Items 
            for inventoryItem in inventory.inventoryItems.all():
                inventoryItem.delete()
            # Delete Inventory 
            inventory.delete()
            # Return Response
            message = "Inventory Deleted SuccessFully"
            return Response({"message": message}, status=status.HTTP_200_OK)
        except IntegrityError:
            message = getDeleteProtectedError("Inventario")
            return Response({'detail': message}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

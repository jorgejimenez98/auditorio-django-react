from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import WorkOrderMiniSerializer, WorkOrderSerializer, WorkOrder


class WorkOrderViewSet(viewsets.ModelViewSet):
    queryset = WorkOrder.objects.all().order_by('-pk')
    serializer_class = WorkOrderMiniSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = WorkOrderSerializer(instance, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

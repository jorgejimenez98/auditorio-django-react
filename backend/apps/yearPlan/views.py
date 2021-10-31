from django.shortcuts import render
from .serializers import YearPlanSerializer, YearPlan, YearPlanMiniSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class YearPlanViewSet(viewsets.ModelViewSet):
    queryset = YearPlan.objects.all().order_by('-year')
    serializer_class = YearPlanMiniSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = YearPlanSerializer(instance, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

from django.shortcuts import render
from .serializers import YearPlanSerializer, YearPlan
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class YearPlanViewSet(viewsets.ModelViewSet):
    queryset = YearPlan.objects.all().order_by('-year')
    serializer_class = YearPlanSerializer
    permission_classes = [IsAuthenticated]

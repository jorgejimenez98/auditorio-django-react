from django.shortcuts import render
from .serializers import YearPlanSerializer, YearPlan, YearPlanMiniSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from apps.extraPermissions import IsAuditor


class YearPlanViewSet(viewsets.ModelViewSet):
    queryset = YearPlan.objects.all().order_by('-year')
    serializer_class = YearPlanSerializer
    permission_classes = [IsAuthenticated, IsAuditor]

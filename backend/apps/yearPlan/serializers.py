from rest_framework import serializers
from .models import YearPlan
from ..workOrder.serializers import WorkOrderMiniSerializer


class YearPlanMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = YearPlan
        fields = ['id', 'year', 'cantidadAudit']


class YearPlanSerializer(serializers.ModelSerializer):
    workOrders = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = YearPlan
        fields = '__all__'
        extra_kwargs = {'workOrders': {'required': True}}

    def get_workOrders(self, obj):
        serializer = WorkOrderMiniSerializer(obj.workOrders.all(), many=True)
        return serializer.data

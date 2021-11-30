from rest_framework import serializers
from .models import WorkOrder, Directive
from ..core.serializers import UserMiniSerializer


class DirectiveSerializer(serializers.ModelSerializer):

    class Meta:
        model = Directive
        fields = ['text']


class WorkOrderMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkOrder
        fields = ['id', 'entity', 'codNIT', 'codREEUP', 'actionType',
                  'unidadPress', 'cantAuditores', 'diasHabiles', 'startDate']


class WorkOrderSerializer(serializers.ModelSerializer):
    directives = serializers.StringRelatedField(read_only=True, many=True)
    yearPlan = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = WorkOrder
        fields = ['id', 'dateTimeCreated', 'author', 'yearPlan', 'noWO', 'directives',
                  'criteria', 'system', 'auditType', 'leader', 'auditor1', 'auditor2', 'entity',
                  'subordinated', 'address', 'province', 'municipality', 'NAE', 'FORG', 'cubanStateEntrpSys', 'isPerfecting',
                  'merchantSociety', 'codNIT', 'codREEUP', 'actionType', 'unidadPress', 'cantAuditores', 'diasHabiles', 'startDate', 'endDate']

    def get_directives(self, obj):
        serializer = DirectiveSerializer(obj.directives.all(), many=True)
        return serializer.data

    def get_yearPlan(self, obj):
        return obj.yearPlan.year

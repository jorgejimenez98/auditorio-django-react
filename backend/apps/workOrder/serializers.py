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
        fields = ['id', 'entity', "noWO", 'codNIT', 'codREEUP', 'actionType',
                  'unidadPress', 'cantAuditores', 'diasHabiles', 'startDate']


class WorkOrderSerializer(serializers.ModelSerializer):
    directives = serializers.StringRelatedField(read_only=True, many=True)
    yearPlan = serializers.SerializerMethodField(read_only=True)
    yearPlanId = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = WorkOrder
        fields = ['id', 'dateTimeCreated', 'author', 'yearPlan', 'yearPlanId', 'noWO', 'directives',
                  'criteria', 'system', 'auditType', 'leader', 'auditor1', 'auditor2', 'entity',
                  'subordinated', 'address', 'province', 'municipality', 'NAE', 'FORG', 'cubanStateEntrpSys', 'isPerfecting',
                  'merchantSociety', 'codNIT', 'codREEUP', 'actionType', 'unidadPress', 'cantAuditores', 'diasHabiles', 'startDate', 'endDate']

    def get_directives(self, obj):
        serializer = DirectiveSerializer(obj.directives.all(), many=True)
        return serializer.data

    def get_yearPlan(self, obj):
        return obj.yearPlan.year

    def get_yearPlanId(self, obj):
        return obj.yearPlan.id


class WorkOrderDetailsSerializer(serializers.ModelSerializer):
    yearPlan = serializers.SerializerMethodField(read_only=True)
    staff = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = WorkOrder
        fields = ['id', 'author', 'yearPlan', 'noWO',
                  'criteria', 'system', 'auditType', 'staff', 'entity',
                  'subordinated', 'address', 'province', 'municipality', 'NAE', 'FORG', 'cubanStateEntrpSys', 'isPerfecting',
                  'merchantSociety', 'codNIT', 'codREEUP', 'actionType', 'unidadPress', 'cantAuditores', 'diasHabiles', 'startDate', 'endDate']

    def get_yearPlan(self, obj):
        return obj.yearPlan.year

    def get_staff(self, obj):
        if len(obj.leader) == 0 and len(obj.auditor1) == 0 and len(obj.auditor2) == 0:
            return [""]
        return [
            obj.leader,
            obj.auditor1,
            obj.auditor2
        ]

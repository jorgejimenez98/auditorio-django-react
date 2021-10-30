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
        fields = ['id', 'datetime', 'noWO']


class WorkOrderSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField(read_only=True)
    directives = serializers.StringRelatedField(read_only=True, many=True)

    class Meta:
        model = WorkOrder
        fields = ['id', 'author', 'yearPlan', 'noWO', 'directives',
                  'criteria', 'system', 'leader', 'auditor1', 'auditor2', 'entity',
                  'subordinated', 'address', 'province', 'municipality', 'NAE', 'financingForm',
                  'FORG', 'cubanStateEntrpSys', 'isPerfecting', 'merchantSociety']

    def get_author(self, obj):
        serializer = UserMiniSerializer(obj.author)
        return serializer.data

    def get_directives(self, obj):
        serializer = DirectiveSerializer(obj.directives.all(), many=True)
        return serializer.data

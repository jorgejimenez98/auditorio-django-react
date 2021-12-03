from rest_framework import serializers
from .models import Inventory, InventoryItem

class InventoryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryItem
        fields = '__all__'
    

class InventorySerializer(serializers.ModelSerializer):
    yearPlan = serializers.SerializerMethodField(read_only=True)
    workOrder = serializers.SerializerMethodField(read_only=True)
    inventoryItems = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Inventory
        fields = ["id", 'author', 'yearPlan', 'workOrder', 'dateTimeCreate', 'inventoryItems']
    
    def get_yearPlan(self, obj):
        return {'id': obj.yearPlan.pk, 'year': obj.yearPlan.year}
    
    def get_workOrder(self, obj):
        return {'id': obj.workOrder.pk, 'noWO': obj.workOrder.noWO}
    
    def get_inventoryItems(self, obj):
        serializer = InventoryItemSerializer(obj.inventoryItems.all(), many=True)
        return serializer.data
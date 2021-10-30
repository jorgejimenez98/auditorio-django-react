from rest_framework import serializers
from .models import YearPlan


class YearPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = YearPlan
        fields = '__all__'

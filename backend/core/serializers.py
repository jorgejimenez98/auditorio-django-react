from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'name', 'isAdmin', 'isBoosWorkOrder', 'isBoosPlan', 'isAuditor']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'name', 'isAdmin', 'isBoosWorkOrder', 'isBoosPlan', 'isAuditor', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

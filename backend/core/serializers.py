from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)
    rol = serializers.SerializerMethodField(read_only=True)
    bolRol = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'name', 'isAdmin', 'isBoosWorkOrder',
                  'isBoosPlan', 'isAuditor', 'rol', 'bolRol']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_rol(self, obj):
        if obj.is_staff:
            return 'Administrador'
        elif obj.isBoosWorkOrder:
            return 'Rector'
        elif obj.isBoosPlan:
            return 'Jefe de Plan'
        elif obj.isAuditor:
            return 'Auditor'
        return 'Sin ROL'

    def get_bolRol(self, obj):
        if obj.is_staff:
            return 'isAdmin'
        elif obj.isBoosWorkOrder:
            return 'isBoosWorkOrder'
        elif obj.isBoosPlan:
            return 'isBoosPlan'
        elif obj.isAuditor:
            return 'isAuditor'
        return 'Sin ROL'


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'name', 'isAdmin',
                  'isBoosWorkOrder', 'isBoosPlan', 'isAuditor', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

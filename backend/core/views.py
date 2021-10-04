from django.contrib.auth import get_user_model
from django.db import IntegrityError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets, status
from backend import utils
from .serializers import UserSerializerWithToken, UserSerializer


# AUTHENTICATION PROCESS


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        initialData = self.initial_data
        try:
            user = get_user_model().objects.get(email=initialData.get('email'))
            if not user.check_password(initialData.get('password')):
                return Response({'detail': utils.getLoginErrorMessage()}).data
            data = super().validate(attrs)
            serializer = UserSerializerWithToken(self.user).data
            for k, v in serializer.items():
                data[k] = v
            return data
        except get_user_model().DoesNotExist:
            return Response({'detail': utils.getUserNotExistMessage(initialData.get('email'))}).data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# VIEW SET
class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all().order_by('-pk')
    permission_classes = [IsAdminUser, IsAuthenticated]


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def changePersonalData(request):
    data = request.data
    try:
        user = request.user
        user.name = data.get('name')
        user.email = data.get('email')
        user.save()
        serializer = UserSerializer(user)
        return Response(UserSerializerWithToken(user, many=False).data, status=status.HTTP_200_OK)
    except IntegrityError:
        message = 'Ya existe un usuario con el correo {}'.format(data['email'])
        return Response({'detail': message}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

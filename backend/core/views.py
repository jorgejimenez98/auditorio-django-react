from django.contrib.auth import get_user_model
from django.db import IntegrityError
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, action
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

    @action(methods=["POST"], detail=False)
    def deleteSelectedUsers(self, request, pk=None):
        """ Method to delete the selected Users in the frontend """
        try:
            for user in request.data:
                us = get_user_model().objects.get(pk=user.get('id'))
                us.delete()
            return Response({'Users Eliminated Successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)


""" User Profile Methods """


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def changePersonalData(request):
    """ Method to change the user login personal Data """
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


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserPassword(request):
    """ Method to change the user login password """
    user = request.user
    data = request.data
    try:
        if not user.check_password(data.get('oldPassword')):
            raise Exception(
                'La actual contraseña no es correcta, inténtelo de nuevo')
        user.password = make_password(data.get('newPassword'))
        user.save()
        return Response(UserSerializerWithToken(user, many=False).data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'detail': e.args[0]}, status=status.HTTP_400_BAD_REQUEST)

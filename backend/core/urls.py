# django-rest-framework imports
from rest_framework import routers
# Django imports
from django.urls import path
# Login View and View Set
from .views import MyTokenObtainPairView, UserViewSet, changePersonalData

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(), name='loginView'),
    path('users/changePersonalData/', changePersonalData, name='changePersonalData'),
]

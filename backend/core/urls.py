# django-rest-framework imports
from rest_framework import routers
# Django imports
from django.urls import path
# Login View and View Set
from . import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='loginView'),
    path('users/changePersonalData/', views.changePersonalData, name='changePersonalData'),
    path('users/updateUserPassword/', views.updateUserPassword, name='updateUserPassword'),
]

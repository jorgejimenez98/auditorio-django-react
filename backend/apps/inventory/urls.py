from rest_framework import routers
from .views import InventoryViewSet

router = routers.DefaultRouter()
router.register('inventories', InventoryViewSet)
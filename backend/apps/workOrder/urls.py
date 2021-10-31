from rest_framework import routers
from .views import WorkOrderViewSet

router = routers.DefaultRouter()
router.register("workOrders", WorkOrderViewSet)

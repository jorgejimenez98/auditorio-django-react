from rest_framework import routers
from .views import YearPlanViewSet

router = routers.DefaultRouter()
router.register("yearPlans", YearPlanViewSet)

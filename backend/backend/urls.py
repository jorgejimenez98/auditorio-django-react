from rest_framework import routers
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
# Router Imports
from core.urls import router as userRouter
from apps.yearPlan.urls import router as yearPlanRouter
from apps.workOder.urls import router as workOdersRouter


class DefaulRouter(routers.DefaultRouter):
    def extend(self, extra_router):
        self.registry.extend(extra_router.registry)


router = DefaulRouter()
router.extend(userRouter)
router.extend(yearPlanRouter)
router.extend(workOdersRouter)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Api Urls
    path('api/', include(router.urls)),
    # Authentication Urls
    path('', include('core.urls'))
]

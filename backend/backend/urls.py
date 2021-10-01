from rest_framework import routers
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
# Router Imports
from core.urls import router as userRouter


class DefaulRouter(routers.DefaultRouter):
    def extend(self, extra_router):
        self.registry.extend(extra_router.registry)


router = DefaulRouter()
router.extend(userRouter)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Api Urls
    path('api/', include(router.urls)),
    # Authentication Urls
    path('', include('core.urls'))
]

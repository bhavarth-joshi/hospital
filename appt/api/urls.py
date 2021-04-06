from rest_framework import routers

from .views import ApptViewSet

router = routers.DefaultRouter()
router.register('appt', ApptViewSet, 'appt')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls

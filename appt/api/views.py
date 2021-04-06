from rest_framework import viewsets

from .serializers import ApptSerializer
from appt.models import Appt


class ApptViewSet(viewsets.ModelViewSet):
    queryset = Appt.objects.all()
    serializer_class = ApptSerializer
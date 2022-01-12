from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from ..models import Appointment
from ..serializers import AppointmentSerializerGet, AppointmentSerializerPost


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return AppointmentSerializerGet
        return AppointmentSerializerPost



from rest_framework import serializers

from ..models import Appointment

from .doctorSerializer import DoctorSerializer
from .patientSerializer import PatientSerializer


class AppointmentSerializerPost(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['id', 'doctor', 'patient', 'date', 'local']
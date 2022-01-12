from rest_framework import serializers

from ..models import Appointment

from .doctorSerializer import DoctorSerializer
from .patientSerializer import PatientSerializer


class AppointmentSerializerGet(serializers.ModelSerializer):
    doctor = DoctorSerializer(read_only=False)
    patient = PatientSerializer(read_only=False)

    class Meta:
        model = Appointment
        fields = ['id', 'doctor', 'patient', 'date', 'local']
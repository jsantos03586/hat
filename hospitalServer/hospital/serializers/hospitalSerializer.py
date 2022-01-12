from rest_framework import serializers

from ..models import Hospital
from .doctorSerializer import DoctorSerializer

class HospitalSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(many=True, read_only=True)

    class Meta:
        model = Hospital
        fields = ['name', 'doctor']
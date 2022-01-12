from rest_framework import routers

from .viewsets import HospitalViewSet, DoctorViewSet, PatientViewSet, AppointmentViewSet

router = routers.DefaultRouter()
router.register(r'hospitals', HospitalViewSet, basename='hospital')
router.register(r'doctors', DoctorViewSet, basename='doctor')
router.register(r'patients', PatientViewSet, basename='patient')
router.register(r'appointments', AppointmentViewSet, basename='appointment')


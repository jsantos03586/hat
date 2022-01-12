from django.test import TestCase
from hospital.models import Doctor


class DoctorUnitTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        Doctor.objects.create(name='Doctor 1')

    def test_doctor_label(self):
        """
        Ensure that verbose_name of doctor is Médico.
        """
        doctor = Doctor.objects.get(id=1)
        doctor_label = doctor._meta.verbose_name
        self.assertEqual(doctor_label, 'Médico/a')

    def test_doctor_str(self):
        """
        Ensure that str function returns the name of doctor.
        """
        doctor = Doctor.objects.get(id=1)
        doctor_str = doctor.__str__()
        self.assertEqual(doctor_str, 'Doctor 1')





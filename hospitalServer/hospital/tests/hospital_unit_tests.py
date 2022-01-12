from django.test import TestCase
from hospital.models import Hospital


class HospitalUnitTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        Hospital.objects.create(name='Hospital 1')

    def test_hospital_label(self):
        """
        Ensure that verbose_name of hospital is Hospital.
        """
        hospital = Hospital.objects.get(id=1)
        hospital_label = hospital._meta.verbose_name
        self.assertEqual(hospital_label, 'Hospital')

    def test_doctor_label(self):
        """
        Ensure that verbose_name of doctor is Médicos.
        """
        hospital = Hospital.objects.get(id=1)
        doctor_label = hospital._meta.get_field('doctor').verbose_name
        self.assertEqual(doctor_label, 'Médicos')

    def test_hospital_str(self):
        """
        Ensure that str function returns the name of hospital.
        """
        hospital = Hospital.objects.get(id=1)
        hospital_str = hospital.__str__()
        self.assertEqual(hospital_str, 'Hospital 1')





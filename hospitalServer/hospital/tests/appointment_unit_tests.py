from django.test import TestCase
from hospital.models import Appointment, Doctor, Patient


class AppointmentUnitTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        doc = Doctor.objects.create(name='Doctor 1', number=1234)
        pat = Patient.objects.create(name="Patient 1", health_number=12345)
        Appointment.objects.create(doctor=doc, patient=pat, date='2022-02-01')

    def test_appointment_label(self):
        """
        Ensure that verbose_name of appointment is Consulta.
        """
        appointment = Appointment.objects.get(id=1)
        appointment_label = appointment._meta.verbose_name
        self.assertEqual(appointment_label, 'Consulta')

    def test_appointment_str(self):
        """
        Ensure that str function returns the name of hospital.
        """
        appointment = Appointment.objects.get(id=1)
        appointment_str = appointment.__str__()
        self.assertEqual(appointment_str, 'Doctor 1')





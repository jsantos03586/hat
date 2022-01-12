from django.test import TestCase
from hospital.models import Patient


class PatientUnitTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        Patient.objects.create(name='Patient 1', health_number=123)

    def test_patient_label(self):
        """
        Ensure that verbose_name of patient is Paciente.
        """
        patient = Patient.objects.get(id=1)
        patient_label = patient._meta.verbose_name
        self.assertEqual(patient_label, 'Paciente')

    def test_patient_str(self):
        """
        Ensure that str function returns the name of patient.
        """
        patient = Patient.objects.get(id=1)
        patient_str = patient.__str__()
        self.assertEqual(patient_str, 'Patient 1')

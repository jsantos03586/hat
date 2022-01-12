from django.test import TestCase
from rest_framework.test import RequestsClient
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from hospital.models import Appointment, Doctor, Patient


# Create your tests here.
class AppointmentAPITests(APITestCase):

    @classmethod
    def setUpTestData(cls):
        Doctor.objects.create(name='Doctor 1', number=1234)
        Patient.objects.create(name="Patient 1", health_number=12345)

    def test_appointment(self):
        """
        Ensure we can create, get and remove a new assignment object.
        """
        url = reverse('appointment-list')
        data = {'doctor': 1, 'patient': 1, 'date': '2021-11-29', 'local': 'D10'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Appointment.objects.count(), 1)
        self.assertEqual(Appointment.objects.get().local, 'D10')

        response_get = self.client.get('/api/appointments/1/')
        self.assertEqual(response_get.status_code, status.HTTP_200_OK)


        self.assertEqual(response_get.data,  {"id": 1, "doctor": {"id": 1, "name": "Doctor 1", "number": "1234"},
                                              "patient": { "id": 1, "name": "Patient 1", "health_number": 12345},
                                              "date": "2021-11-29", "local": "D10"})

        response_delete = self.client.delete('/api/appointments/1/')
        self.assertEqual(response_delete.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Appointment.objects.count(), 0)






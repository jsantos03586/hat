from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from hospital.models import Hospital


# Create your tests here.
class HospitalAPITests(APITestCase):

    def test_hospital(self):
        """
        Ensure we can create, get and remove a new hospital object.
        """
        url = reverse('hospital-list')
        data = {'name': "Hospital 1"}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Hospital.objects.count(), 1)
        self.assertEqual(Hospital.objects.get().name, 'Hospital 1')

        response_get = self.client.get('/api/hospitals/1/')
        self.assertEqual(response_get.status_code, status.HTTP_200_OK)
        self.assertEqual(response_get.data, {'name': 'Hospital 1', 'doctor': []})

        response_delete = self.client.delete('/api/hospitals/1/')
        self.assertEqual(response_delete.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Hospital.objects.count(), 0)


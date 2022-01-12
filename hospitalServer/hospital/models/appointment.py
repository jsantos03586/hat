from django.db import models

from .doctor import Doctor
from .patient import Patient

class Appointment(models.Model):
    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.PROTECT,
        verbose_name='Médico/a'
    )
    patient = models.ForeignKey(
        Patient,
        on_delete=models.PROTECT,
        verbose_name='Paciente'
    )
    date = models.DateField(verbose_name='Data')
    local = models.CharField(max_length=255, verbose_name='Gabinete')

    def __str__(self) -> str:
        return self.doctor.name

    class Meta:
        verbose_name = 'Consulta'
        verbose_name_plural = 'Consultas'
        ordering = ['-pk']
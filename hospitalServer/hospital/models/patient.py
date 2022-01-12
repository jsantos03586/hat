from django.db import models

from .gender import Gender

class Patient(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nome')
    health_number = models.IntegerField(verbose_name='Número de saúde')
    gender = models.CharField(
        max_length=1,
        choices=Gender.choices,
        default=Gender.NONE,
        verbose_name='Género'
    )

    def __str__(self) -> str:
        return self.name
    

    class Meta:
        verbose_name = 'Paciente'
        verbose_name_plural = 'Pacientes'
        ordering = ['name', 'health_number']
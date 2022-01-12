from django.db import models

from .speciality import Speciality

class Doctor(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nome')
    number = models.CharField(max_length=32, verbose_name='Número')
    speciality = models.CharField(
        max_length=2,
        choices=Speciality.choices,
        default=Speciality.NONE,
        verbose_name='Especialidade'
    )

    def __str__(self)  -> str:
        return self.name
    

    class Meta:
        verbose_name = 'Médico/a'
        verbose_name_plural = 'Médicos'
        ordering = ['name', 'number']

from django.db import models

from .doctor import Doctor

class Hospital(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nome')
    doctor = models.ManyToManyField(
        Doctor,
        verbose_name='Médicos'
    )

    class Meta:
        verbose_name = 'Hospital'
        verbose_name_plural = 'Hospitais'
        ordering = ['name']

    def __str__(self) -> str:
        return self.name
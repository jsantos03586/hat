from django.db import models
from django.utils.translation import gettext_lazy as _

class Speciality(models.TextChoices):
    NONE = '', _('None'),
    CARDIOLOGY = 'CD', _('Cardiology'),
    NEUROLOGY = 'NG', _('Neurology')
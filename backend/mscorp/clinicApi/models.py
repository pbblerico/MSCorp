from django.db import models
from django.contrib.auth.models import UserManager
# Create your models here.

class ClinicType(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Clinic(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    type = models.ForeignKey(ClinicType, on_delete=models.PROTECT, related_name='clinic_type')
    public_id = models.CharField(max_length=100)
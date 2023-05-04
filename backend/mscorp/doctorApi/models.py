from django.db import models
from api.models import User
from clinicApi.models import Clinic
# from
# Create your models here.

class Specialization(models.Model):
    name = models.CharField(max_length = 100, unique = True)

class Doctor(models.Model):
    experience = models.FloatField()
    user_id = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user", default="", null=True)
    clinic = models.ForeignKey(Clinic, on_delete=models.CASCADE, related_name="clinic")
    specialization = models.OneToOneField(Specialization, on_delete=models.CASCADE, related_name="speciality")
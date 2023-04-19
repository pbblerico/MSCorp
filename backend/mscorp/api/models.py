from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
# Create your models here.


class User(AbstractUser):
    class UserRole(models.TextChoices):
        CLIENT = "Client", _("Client")
        ADMIN = "Admin", _("Admin")
        DOCTOR = "Doctor", _("Doctor")
        MANAGER = "Manager", _("Manager")

    class Gender(models.TextChoices):
        MALE = "Male", _("Male")
        FEMALE = "Female", _("Female")

    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    birthDate = models.DateField()
    phoneNumber = models.CharField(max_length=15)
    address = models.CharField(max_length=255, default="")
    username = None

    gender = models.CharField(
        max_length=10,
        choices = Gender.choices,
        default = Gender.MALE,
    )


    role = models.CharField(
        max_length=10,
        choices = UserRole.choices,
        default = UserRole.CLIENT,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


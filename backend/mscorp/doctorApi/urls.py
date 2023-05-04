from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from doctorApi import views

urlpatterns = [
    path('', views.DoctorsList),
    path('<int:id>/', views.DoctorDetail),
    path('specializations/', views.SpecializationList),
    path('specializations/<int:id>/', views.SpecializationDetail),
]
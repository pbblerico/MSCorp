from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from clinicApi import views

urlpatterns = [
    path('clinic_type/', views.ClinicTypeList),
    path('clinic_type/<int:id>/', views.ClinicTypeDetail),
    path('clinic/', views.ClinicList.as_view()),
    path('clinic/<int:id>/', views.ClinicDetail.as_view()),
    path('clinic/<int:id>/address/', views.getClinicAddress),
    path('clinic/<int:id>/type/', views.getClinicType),
    path('clinic/<int:id>/doctors/', views.getClinicsDoctors),
]

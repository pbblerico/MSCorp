from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from clinicApi import views

urlpatterns = [
    path('address/', views.AddressList.as_view()),
    path('address/<int:id>/', views.AddressDetail.as_view())
]

from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from api import views

urlpatterns = [
#     path('login/', obtain_jwt_token),
    path('register/', views.Register.as_view()),
    path('users/', views.getUsers),
    path('login/', views.Login.as_view()),
]

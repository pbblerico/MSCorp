from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from doctorApi.models import *
from rest_framework.views import APIView
import json
from doctorApi.serializers import *

@api_view(['GET', 'POST'])
def DoctorsList(request):
    if request.method == 'GET':
        doctors = Doctor.objects.all()
        return JsonResponse(DoctorSerializer(doctors, many=True).data, safe=False)
    if request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getDoctor(id):
        try:
            return Doctor.objects.get(id=id)
        except Doctor.DoesNotExist as e:
            return None


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def DoctorDetail(request, id):

    if request.method == 'GET':
        doctor = getDoctor(id)
        if doctor == None:
            return JsonResponse({'error': "such doctor not found"})
        serializer = DoctorSerializer(type)

        return JsonResponse(serializer.data)
    if request.method == 'PUT':
        doctor = getDoctor(id)
        if doctor == None:
            return JsonResponse({'error': "such doctor not found"})
        serializer = DoctorSerializer(doctor, request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    if request.method == 'DELETE':
        doctor = getDoctor(id)
        if doctor == None:
            return JsonResponse({'error': "such doctor not found"})
        doctor.delete()
        return JsonResponse({'deleted': True})
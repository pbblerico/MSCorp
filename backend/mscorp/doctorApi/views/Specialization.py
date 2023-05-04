from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from doctorApi.models import *
from rest_framework.views import APIView
import json
from clinicApi.views import *
from doctorApi.serializers import *

@api_view(['GET', 'POST'])
def SpecializationList(request):
    if request.method == 'GET':
        speciality = Specialization.objects.all()
        return JsonResponse(SpecializationSerializer(speciality, many=True).data, safe=False)
    if request.method == 'POST':
        serializer = SpecializationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getSpecialization(id):
        try:
            return Specialization.objects.get(id=id)
        except Specialization.DoesNotExist as e:
            return None


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def SpecializationDetail(request, id):

    if request.method == 'GET':
        specialization = getSpecialization(id)
        if specialization == None:
            return JsonResponse({'error': "such specialization not found"})
        serializer = SpecializationSerializer(specialization)

        return JsonResponse(serializer.data)

    if request.method == 'PUT':
        specialization = getSpecialization(id)
        if specialization == None:
            return JsonResponse({'error': "such specialization not found"})
        serializer = SpecializationSerializer(specialization, request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    if request.method == 'DELETE':
        specialization = getSpecialization(id)
        if specialization == None:
            return JsonResponse({'error': "such specialization not found"})
        specialization.delete()
        return JsonResponse({'deleted': True})


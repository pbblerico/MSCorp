from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from clinicApi.models import ClinicType
from rest_framework.views import APIView
import json
from clinicApi.serializers import ClinicTypeSerializer

@api_view(['GET', 'POST'])
def ClinicTypeList(request):
    if request.method == 'GET':
        types = ClinicType.objects.all()
        return JsonResponse(ClinicTypeSerializer(types, many=True).data, safe=False)
    if request.method == 'POST':
        serializer = ClinicTypeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getClinicType(id):
        try:
            return ClinicType.objects.get(id=id)
        except ClinicType.DoesNotExist as e:
            return None


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def ClinicTypeDetail(request, id):

    if request.method == 'GET':
        type = getClinicType(id)
        if type == None:
            return JsonResponse({'error': "such clinic type not found"})
        serializer = ClinicTypeSerializer(type)

        return JsonResponse(serializer.data)
    if request.method == 'PUT':
        type = getClinicType(id)
        if type == None:
            return JsonResponse({'error': "such clinic type not found"})
        serializer = ClinicTypeSerializer(type, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    if request.method == 'DELETE':
        type = getClinicType(id)
        if type == None:
            return JsonResponse({'error': "such clinic type not found"})
        type.delete()
        return JsonResponse({'deleted': True})
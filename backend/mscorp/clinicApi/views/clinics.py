from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import HttpResponse
import json
from clinicApi.views import *
from clinicApi.models import Clinic
from clinicApi.serializers import *


class ClinicList(APIView):
    def get(self, request):
        clinic = Clinic.objects.all()
        return JsonResponse(ClinicSerializer(clinic, many=True).data, safe=False)

    def post(self, request):
        serializer = ClinicSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getClinic(id):
    try:
        return Clinic.objects.get(id=id)
    except Clinic.DoesNotExist as e:
        return None

def getClinicAddress(request, id):
    clinic = getClinic(id)
    if clinic == None:
        return JsonResponse({'error': "such clinic not found"})

    return JsonResponse({"address": clinic.address})

def getClinicType(request, id):
    clinic = getClinic(id)
    if clinic == None:
        return JsonResponse({'error': "such clinic not found"})

    return JsonResponse({"type": str(clinic.type)})

class ClinicDetail(APIView):
    def get(self, request, id):
        clinic = getClinic(id)
        if clinic == None:
           return JsonResponse({'error': "such clinic not found"})

        serializer = ClinicSerializer(clinic)

        return JsonResponse(serializer.data)

    def put(self, request, id):
         clinic = getClinic(id)
         if clinic == None:
            return JsonResponse({'error': "such clinic not found"})

         serializer = ClinicSerializer(clinic, data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()

         return JsonResponse(serializer.data)

    def delete(self, request, id):
        clinic = getClinic(id)
        if clinic == None:
            return JsonResponse({'error': "such clinic not found"})

        clinic.delete()

        return JsonResponse({'deleted': True})
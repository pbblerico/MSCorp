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
        serializer = VacancySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getVacancy(id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': 'vacancy doesn\'t exist'})


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def apiVacancyDetail(request, id):

    if request.method == 'GET':
        vacancy = getVacancy(id)
        serializer = VacancySerializer(vacancy)

        return JsonResponse(serializer.data)
    if request.method == 'PUT':
        vacancy = getVacancy(id)
        serializer = VacancySerializer(vacancy, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    if request.method == 'DELETE':
        vacancy = getVacancy(id)
        vacancy.delete()
        return JsonResponse({'deleted': True})
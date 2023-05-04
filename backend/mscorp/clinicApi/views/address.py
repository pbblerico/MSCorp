from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.http import HttpResponse
import json
from clinicApi.models import Address
from clinicApi.serializers import AddressSerializer


class AddressList(APIView):
    def get(self, request):
        addresses = Address.objects.all()
        return JsonResponse(AddressSerializer(addresses, many=True).data, safe=False)

    def post(self, request):
        serializer = AddressSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

def getAddress(id):
    try:
        return Address.objects.get(id=id)
    except Address.DoesNotExist as e:
        return None

class AddressDetail(APIView):
    def get(self, request, id):
        address = getAddress(id)
        if address == None:
           return JsonResponse({'error': "such address not found"})

        serializer = AddressSerializer(address)

        return JsonResponse(serializer.data)

    def put(self, request, id):
        address = getAddress(id)
        if address == None:
                   return JsonResponse({'error': "such address not found"})

        serializer = AddressSerializer(address, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return JsonResponse(serializer.data)

    def delete(self, request, id):
        address = getAddress(id)
        if address == None:
            return JsonResponse({'error': "such address not found"})

        address.delete()

        return JsonResponse({'deleted': True})
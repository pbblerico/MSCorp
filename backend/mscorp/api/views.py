from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from .serializers import UserSerializer
from .models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
import datetime, jwt

class Register(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse(serializer.data)


def getUsers(request):
    return JsonResponse(UserSerializer(User.objects.all(), many = True).data, safe=False)

class Login(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            return JsonResponse({'error': 'User not found'})

        if not user.check_password(password):
            return JsonResponse({'error': 'Wrong password'})

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = JsonResponse({'jwt': token})
        response.set_cookie(key='jwt', value=token, httponly=True)

        return response
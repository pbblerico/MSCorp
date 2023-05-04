from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from api.serializers import UserSerializer
from api.models import User
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
        # phone = request.data['phoneNumber']

        user = User.objects.filter(email=email).first()

        if user is None:
            return JsonResponse({'error': 'User not found'})

        if not user.check_password(password):
            return JsonResponse({'error': 'Wrong password'})

        payload = {
            'id': user.id,
            'role': user.role,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = JsonResponse({'jwt': token})
        response.set_cookie(key='jwt', value=token, httponly=True)

        return response


# class Token():
#     def __init__(self, user: User = null, token = ""):
#         this.payload = {
#             'id': user.id,
#             'role': user.role,
#             'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
#             'iat': datetime.datetime.utcnow()
#         }
#         this.token = "token"
#
#     def encode(user: User):
#         this.token = jwt.encode(this.payload, 'secret', algorithm='HS256').decode('utf-8')
#
#     def decode():



class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            return JsonResponse({"error": "No user found"})

        try:
            payload = jwt.decode(token, 'secret', algoritm=['HS256'])

        except jwt.ExpiredSignatureError:
            return JsonResponse({"error": "No user found"})
        id = payload['id']
        user = User.objects.get(id=id)

        response = JsonResponse({'id': user.id, 'role': user.role})

        return response

class LogOutView(APIView):
    def post(self, request):
        response = JsonResponse()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
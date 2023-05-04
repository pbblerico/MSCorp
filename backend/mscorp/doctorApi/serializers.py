from doctorApi.models import *
from rest_framework import serializers

class SpecializationSerializer(serializers.Serializer):
     id = serializers.ReadOnlyField()
     name = serializers.CharField(max_length=100)

     def create(self, validated_data):
         return Specialization.objects.create(**validated_data)

     def update(self, instance, validated_data):
         instance.id = instance.id
         instance.name = validated_data.get("name", instance.name)

         instance.save()
         return instance

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

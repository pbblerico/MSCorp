from clinicApi.models import *
from rest_framework import serializers


class AddressSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    country = serializers.CharField(max_length=100)
    region = serializers.CharField(max_length=100)
    city = serializers.CharField(max_length=100)
    street = serializers.CharField(max_length=100)
    buildingNum = serializers.IntegerField()


    def create(self, validated_data):
        return Address.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.country = validated_data.get("country", instance.country)
        instance.region = validated_data.get("region", instance.region)
        instance.city = validated_data.get("city", instance.city)
        instance.street = validated_data.get("street", instance.street)
        instance.buildingNum = validated_data.get("buildingNum", instance.buildingNum)

        instance.save()
        return instance



class ClinicTypeSerializer(serializers.Serializer):
     id = serializers.ReadOnlyField()
     name = serializers.CharField(max_length=100)

     def create(self, validated_data):
         return Address.objects.create(**validated_data)

     def update(self, instance, validated_data):
         instance.id = instance.id
         instance.name = validated_data.get("name", instance.name)

class ClinicSerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=True)
    type = ClinicTypeSerializer(required=True)

    class Meta:
        model = Clinic
        fields = '__all__'

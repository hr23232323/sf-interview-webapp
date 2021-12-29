from rest_framework import serializers
from .models import Student, DebtToEarningsData

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= Student
        fields=('name', 'email')


class DebtToEarningsDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model= DebtToEarningsData
        fields=('id', 'institutionName', 'city', 'state', 'zip', 
        'institutionType', 'cipCode', 'cipName', 'credentialLevel', 
        'debtToEarningsAnnualRate','meanAnnualEarningsFromSsa','medianAnnualEarningsfromSsa')

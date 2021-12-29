from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    
    def __str__(self):
        return self.name


class DebtToEarningsData(models.Model):
    institutionName = models.CharField(max_length=200)
    city = models.CharField(max_length=60)
    state = models.CharField(max_length=60)
    zip = models.CharField(max_length=60)
    institutionType = models.CharField(max_length=60)
    cipCode = models.CharField(max_length=60)
    cipName = models.CharField(max_length=200)
    credentialLevel = models.CharField(max_length=60)
    debtToEarningsAnnualRate = models.FloatField()
    meanAnnualEarningsFromSsa = models.FloatField()
    medianAnnualEarningsfromSsa = models.FloatField()
    
    def __str__(self):
        return f"{self.cipCode} - {self.institutionName} - {self.cipName}"

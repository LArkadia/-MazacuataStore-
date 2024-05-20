from django.db import models
from CuentaBancaria.models import CuentaBancaria
from django.utils.crypto import get_random_string
# Create your models here.
class TarjetaCredito(models.Model):
    numero=models.TextField(unique=True,default=get_random_string(10),max_length=10)
    saldo = models.FloatField()
    cuenta=models.ForeignKey(CuentaBancaria,on_delete=models.CASCADE)

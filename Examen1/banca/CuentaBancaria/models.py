from django.db import models
from Usuario.models import Usuario
from django.utils.crypto import get_random_string
# Create your models here.
class CuentaBancaria(models.Model):
    numeroCuenta=models.TextField(unique=True,default=get_random_string(10),max_length=10)
    saldo = models.FloatField()
    usuario=models.ForeignKey(Usuario,on_delete=models.CASCADE)
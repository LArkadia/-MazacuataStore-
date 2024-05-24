from django.db import models

class Usuario(models.Model):
    nombre=models.CharField(max_length=50)
    apellido=models.CharField(max_length=50)
    correo=models.EmailField(unique=True)
    contrasena=models.CharField(max_length=50)

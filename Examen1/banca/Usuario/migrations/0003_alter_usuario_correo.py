# Generated by Django 4.2.13 on 2024-05-20 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Usuario', '0002_rename_user_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='correo',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
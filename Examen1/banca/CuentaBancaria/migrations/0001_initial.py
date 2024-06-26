# Generated by Django 4.2.13 on 2024-05-20 01:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Usuario', '0002_rename_user_usuario'),
    ]

    operations = [
        migrations.CreateModel(
            name='CuentaBancaria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numeroCuenta', models.IntegerField()),
                ('saldo', models.FloatField()),
                ('cuenta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Usuario.usuario')),
            ],
        ),
    ]

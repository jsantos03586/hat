# Generated by Django 3.2.9 on 2022-01-03 11:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0005_alter_appointment_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='appointment',
            options={'ordering': ['-pk'], 'verbose_name': 'Consulta', 'verbose_name_plural': 'Consultas'},
        ),
    ]

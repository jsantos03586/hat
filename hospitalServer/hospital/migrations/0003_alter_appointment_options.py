# Generated by Django 3.2.9 on 2021-11-18 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0002_auto_20211118_1528'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='appointment',
            options={'ordering': ['doctor'], 'verbose_name': 'Consulta', 'verbose_name_plural': 'Consultas'},
        ),
    ]

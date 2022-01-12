# Generated by Django 3.2.9 on 2021-11-18 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospital', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(verbose_name='Data'),
        ),
        migrations.AlterField(
            model_name='doctor',
            name='speciality',
            field=models.CharField(choices=[('', 'None'), ('CD', 'Cardiology'), ('NG', 'Neurology')], default='', max_length=2, verbose_name='Especialidade'),
        ),
    ]
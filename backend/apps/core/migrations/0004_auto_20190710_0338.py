# Generated by Django 2.2.2 on 2019-07-10 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_post_question'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='question',
        ),
        migrations.AddField(
            model_name='notification',
            name='question',
            field=models.TextField(default='ds', max_length=100),
            preserve_default=False,
        ),
    ]

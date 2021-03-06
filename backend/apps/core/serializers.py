from .models import (
   ConslutantInfo,
   Notification,
   Post,
   Results
)

from rest_framework import serializers

class ConslutantInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConslutantInfo
        fields = ('first_name', 'last_name','profile','position')

class PostSerializer(serializers.ModelSerializer):
    consultants = ConslutantInfoSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ('consultants','title','content','img',)

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('send', 'token','question','problem','platform','yourneed')

class ResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('notification', 'anwsers','respone','close')

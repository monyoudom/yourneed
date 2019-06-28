from .models import (
   ConslutantInfo,
   Notification,
   Post

)
from rest_framework import serializers


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'content','img')



class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('send', 'token','problem','platform')
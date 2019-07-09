from django.shortcuts import render
from .models import (ConslutantInfo,Notification,Post)
from .serializers import (PostSerializer,NotificationSerializer)

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status,viewsets
from rest_framework.pagination import PageNumberPagination
from django_filters import rest_framework as filters

class SmallPaginator(PageNumberPagination):
    page_size = 10

class PostViweSet(viewsets.ModelViewSet):
   queryset = Post.objects.all().order_by("-pk")
   serializer_class = PostSerializer
   pagination_class = SmallPaginator

  

class NotificationViweSet(viewsets.ViewSet):
    def create(self, request):
        serializer = NotificationSerializer(data = request.data)
        print(serializer,"testing")
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'true'})
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)




   












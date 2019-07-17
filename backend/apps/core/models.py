from django.db import models
from django.contrib.auth.models import User


class ConslutantInfo(models.Model):
  users = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True)
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  profile   = models.FileField(upload_to='profile_image/')
  position =  models.CharField(max_length=50)
  def __str__(self):
      return str(self.first_name + self.last_name )

class Notification(models.Model):
  send = models.BooleanField()
  token = models.CharField(max_length=100)
  question = models.TextField(max_length=100)
  problem = models.CharField(max_length=1000)
  platform = models.CharField(max_length=30)
  yourneed = models.CharField(max_length=30)
  created = models.DateField(auto_now=False,auto_now_add=True)
  def __str__(self):
      return self.token

class Post(models.Model):
  consultants = models.ForeignKey(ConslutantInfo, related_name='consultants', on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  content = models.TextField(max_length=1000)
  img = models.FileField(upload_to='content/')
  created = models.DateField(auto_now=False,auto_now_add=True)
  def __str__(self):
      return self.title

class Results(models.Model):
  notification = models.ForeignKey(Notification,on_delete=models.CASCADE)
  anwsers  = models.TextField(max_length=1000)
  respone  = models.CharField(max_length=200)
  close    = models.BooleanField()
  created = models.DateField(auto_now=False,auto_now_add=True)




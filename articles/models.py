from django.db import models
from django.conf import settings


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE)

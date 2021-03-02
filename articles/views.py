from django.shortcuts import render
from . import models
from rest_framework import generics, permissions


# Create your views here.
from .serializers import ArticleSerializer


class ArticlesListView(generics.ListAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.AllowAny, )

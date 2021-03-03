from . import models
from rest_framework import generics, permissions, serializers

# Create your views here.
from .serializers import ArticleSerializer


class ArticlesListView(generics.ListAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.AllowAny,)


class ArticleCreateView(generics.ListCreateAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return models.Article.objects.filter(author=user)


class ArticleEditView(generics.RetrieveUpdateAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return models.Article.objects.filter(author=user)


class ArticleDeleteView(generics.RetrieveDestroyAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return models.Article.objects.filter(author=user)

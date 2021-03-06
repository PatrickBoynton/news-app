from . import models
from rest_framework import generics, permissions, serializers

# Create your views here.
from .serializers import ArticleSerializer


class ArticlesListView(generics.ListCreateAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


# class ArticleCreateView(generics.CreateAPIView):
#     queryset = models.Article.objects.all()
#     serializer_class = ArticleCreateSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def perform_create(self, serializer):
#         serializer.save(author=self.request.user)


class ArticleEditView(generics.RetrieveUpdateAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return models.Article.objects.filter(author=user)


class ArticleFilterView(generics.ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        article_type = self.kwargs["article_type"]
        return models.Article.objects.filter(article_type=article_type)


class ArticleDeleteView(generics.RetrieveDestroyAPIView):
    queryset = models.Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return models.Article.objects.filter(author=user)

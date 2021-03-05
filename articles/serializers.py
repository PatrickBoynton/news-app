from rest_framework import serializers
from . import models


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = models.Article
        fields = ('id',
                  'title',
                  'body',
                  'author',
                  'article_status',
                  'article_type')
        read_only_fields = ('author',)


class ArticleCreateSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = models.Article
        fields = ('id',
                  'title',
                  'body',
                  'author',
                  'article_status',
                  'article_type'
                  )

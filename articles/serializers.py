from rest_framework import serializers
from . import models


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = models.Article
        fields = ('id',
                  'title',
                  'body',
                  'author',
                  'article_status',
                  'article_type',
                  'image',
                  'article_created_at',)

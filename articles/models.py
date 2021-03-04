from django.db import models
from django.conf import settings


# Create your models here.
class Article(models.Model):
    draft = "draft"
    # Instead of submitted.
    pending = "pending"
    published = "published"
    rejected = "rejected"
    archived = "archived"

    article_choices = [
        (1, pending),
        (2, pending),
        (3, rejected),
        (4, archived),
    ]

    title = models.CharField(max_length=100)
    body = models.TextField(max_length=255)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE),
    article_status = models.CharField(choices=article_choices, max_length=255,
                                      null=True)

    def __str__(self):
        return self.title

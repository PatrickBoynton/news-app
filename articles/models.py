from django.db import models
from django.conf import settings


# Create your models here.
class Article(models.Model):
    # Article status
    draft = "draft"
    # Instead of submitted.
    pending = "pending"
    published = "published"
    rejected = "rejected"
    archived = "archived"

    # Article Type
    astronomy = "astronomy"
    cosmology = "cosmology"
    exoplanets = "exoplanets"
    editorial = "editorial"

    article_status = [
        (pending, 'pending'),
        (published, 'published'),
        (rejected, 'rejected'),
        (archived, 'archived'),
    ]

    article_tags = [
        (astronomy, 'astronomy'),
        (cosmology, 'cosmology'),
        (exoplanets, 'exoplanets'),
        (editorial, 'editorial')
    ]

    title = models.CharField(max_length=100)
    body = models.TextField(max_length=2000)
    article_status = models.CharField(choices=article_status,
                                      max_length=80,
                                      default="draft")
    article_type = models.CharField(choices=article_tags,
                                    max_length=80,
                                    default="astronomy")
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    article_created_at = models.DateField(auto_now_add=True, null=True, blank=True)
    image = models.ImageField(upload_to='articles', null=True, blank=True)

    def __str__(self):
        return self.title


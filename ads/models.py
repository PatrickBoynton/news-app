from django.db import models


# Create your models here.
class Ad(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()
    image = models.ImageField(upload_to='ads')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

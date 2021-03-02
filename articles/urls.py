from django.urls import path
from . import views
urlpatterns = [
    path('', views.ArticlesListView.as_view())
]

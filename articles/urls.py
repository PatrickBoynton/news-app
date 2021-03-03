from django.urls import path
from . import views
urlpatterns = [
    path('', views.ArticlesListView.as_view()),
    path('create/', views.ArticleCreateView.as_view()),
    path('<int:pk>/', views.ArticleEditView.as_view())
]

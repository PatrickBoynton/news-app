from django.urls import path
from . import views
urlpatterns = [
    path('', views.ArticlesListView.as_view()),
    path('<int:pk>/', views.ArticleDetailView.as_view()),
    path('create/', views.ArticleCreateView.as_view()),
    path('<str:article_type>/', views.ArticleFilterView.as_view()),
    path('edit/<int:pk>/', views.ArticleEditView.as_view()),
    path('delete/<int:pk>/', views.ArticleDeleteView.as_view())
]

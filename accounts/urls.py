from django.urls import path

from . import views

urlpatterns = [
    path("profiles/", views.ProfileListView.as_view()),
    path("profiles/detail/", views.ProfileDetailView.as_view()),
    path("profiles/details/<int:pk>", views.ProfileDetailRetrieveView.as_view())
]

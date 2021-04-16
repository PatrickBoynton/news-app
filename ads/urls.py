from django.urls import path, include
from .views import AdListView, AdRandomView
app_name = 'ads'

urlpatterns = [
    path('', AdListView.as_view()),
    path('random/', AdRandomView.as_view())
]

from django.urls import path, include

app_name = "api_v1"

urlpatterns = [
    path('', include('accounts.urls')),
    path("articles/", include("articles.urls")),
    path('ads/', include('ads.urls'))
]

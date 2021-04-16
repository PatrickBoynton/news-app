from django.shortcuts import render
from .models import Ad
from rest_framework import generics, permissions
from .serializers import AdSerializer


# Create your views here.
class AdListView(generics.ListAPIView):
    serializer_class = AdSerializer
    queryset = Ad.objects.all()


class AdRandomView(generics.ListAPIView):
    serializer_class = AdSerializer

    def get_queryset(self):
        return Ad.objects.order_by("?")[:1]

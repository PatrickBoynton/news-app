from django.contrib import admin
from .models import Profile, CustomUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.
admin.site.register(Profile)
admin.site.register(CustomUser, UserAdmin)

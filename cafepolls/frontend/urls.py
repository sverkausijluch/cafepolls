from django.urls import path, re_path
from .views import *


urlpatterns = [
    path('login/', user_login),
    path('logout/', user_logout),
    re_path(r'^', IndexView.as_view()),
]


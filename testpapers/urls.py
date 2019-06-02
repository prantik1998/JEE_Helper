# pages/urls.py
from django.urls import path
from .views import testpapersView

urlpatterns = [
    path('', testpapersView, name='testpapers')
]
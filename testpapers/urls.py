# pages/urls.py
from django.urls import path
from .views import TestPapersView, AboutPageView

urlpatterns = [
    path('', TestPapersView.as_view(), name='testpapers'),
    path('about', AboutPageView.as_view(), name='testpapersabout')
]
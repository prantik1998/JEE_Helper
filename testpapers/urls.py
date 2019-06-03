# pages/urls.py
from django.urls import path
from .views import TestPapersView, AboutPageView, PdfPageView

urlpatterns = [
    path('', TestPapersView.as_view(), name='testpapers'),
    path('about', AboutPageView.as_view(), name='testpapersabout'),
    path('create_pdf', PdfPageView.as_view(), name='testpaperscreatepdf')
]
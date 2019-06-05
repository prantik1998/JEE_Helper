from django.urls import path
from .views import TeachersView,signin_info


urlpatterns=[
	path('',TeachersView.as_view()),
	path('signin_info',signin_info)
]

from django.urls import path
from .views import StudentsView,signin_info,WelcomeView


urlpatterns=[
	path('',StudentsView.as_view()),
	path('signin_info',signin_info),
	path('welcome',WelcomeView.as_view())
]

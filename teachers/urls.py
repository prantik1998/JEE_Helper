from django.urls import path
from .views import TeachersView,signin_info,WelcomeView,teacher_name,subject_list,SolveView


urlpatterns=[
	path('teacher_name',teacher_name),
	path('',TeachersView.as_view()),
	path('signin_info',signin_info),
	path('welcome',WelcomeView.as_view()),
	path('subject_list',subject_list),
	path('solve',SolveView.as_view())
]

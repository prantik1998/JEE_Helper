from django.urls import path
from .views import StudentsView,signin_info,WelcomeView,DoubtsView,SubjectsView,Question,Question_List,Answer,Answer_List


urlpatterns=[
	path('',StudentsView.as_view()),
	path('signin_info',signin_info),
	path('welcome',WelcomeView.as_view()),
	path('doubts',DoubtsView.as_view()),
	path('Maths',SubjectsView.as_view()),
	path('Chemistry',SubjectsView.as_view()),
	path('Physics',SubjectsView.as_view()),
	path('question',Question),
	path('question_list<path:path>',Question_List),
	path('answer',Answer),
	path('answer_list<path:path>',Answer_List),
	path('question_list<path:path>',Question_List)
]

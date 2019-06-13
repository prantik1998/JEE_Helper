from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.staticfiles.views import serve
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

import pymongo
from djongo import models
# Create your views here.
class TeachersView(TemplateView):
	template_name="teachers.html"

class WelcomeView(TemplateView):
	template_name="welcome.html"

class SolveView(TemplateView):
	template_name="solve.html"

@csrf_exempt
def signin_info(request):
	file_val = json.loads(request.body.decode('utf-8'))
	email=file_val['Email']
	name=file_val['Name']
	image_url=file_val['Image_Url']
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb["teachers"]
	cursor = collection.find({})
	user_exist=True
	for document in cursor:
		if document['Email']==file_val['Email']:
			user_exist=False
			break

	if user_exist:
		collection.insert_one(file_val)

	return HttpResponse("true")

def teacher_name(request):
	name=request.GET["name"]
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb["teachers_name"]
	cursor = collection.find({})
	user_exist=False
	for document in cursor:
		if document['Email']==name:
			user_exist=True
			break
	data={"user_exist":user_exist}
	return JsonResponse(data)

def subject_list(request):
	email=request.GET["email"]
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb["teachers_name"]
	cursor = collection.find({})
	for document in cursor:
		if document["Email"]==email:
			return JsonResponse({"Subject":document["Subject"]})

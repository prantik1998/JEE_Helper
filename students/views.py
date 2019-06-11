from django.shortcuts import render

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
from django.http import HttpResponse
# Create your views here.
class StudentsView(TemplateView):
	template_name="students.html"

class WelcomeView(TemplateView):

	template_name="welcome_students.html"

class DoubtsView(TemplateView):
	template_name="blog.html"

class SubjectsView(TemplateView):
	template_name="doubt.html"

@csrf_exempt
def signin_info(request):
	file_val = json.loads(request.body.decode('utf-8'))
	email=file_val['Email']
	name=file_val['Name']
	image_url=file_val['Image_Url']
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb["students"]
	cursor = collection.find({})
	user_exist=True
	for document in cursor:
		if document['Email']==file_val['Email']:
			user_exist=False
			break

	if user_exist:
		collection.insert_one(file_val)

	return HttpResponse("true")

def image(request,path):
    image_data = open("/home/prantik/Documents/JEE_Helper/students/templates/Slack Themes_files/"+path, "rb").read()
    return HttpResponse(image_data, content_type="image/png")
@csrf_exempt
def Question(request):
	file_val = json.loads(request.body.decode('utf-8'))
	email=file_val['Email']
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb[file_val["subject"]]
	cursor = collection.find({})
	user_exist=False
	del file_val["subject"]	
	for document in cursor:
		if document['Email']==file_val['Email']:
			document["Question"].append(file_val['Question'])			
			collection.save(document)
			return HttpResponse("true")

	file_val["Question"]=[file_val["Question"]]


	collection.insert_one(file_val)

	return HttpResponse("true")

def Question_List(request,path):
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	path=request.GET["subject"]

	collection=mydb[path]	
	cursor = collection.find({})
	data={}
	data["Question"]=[]
	for document in cursor:
		data["Question"].append(document["Question"])
	to_return=json.dumps(data)
	return JsonResponse(data)

@csrf_exempt
def Answer(request):
	file_val = json.loads(request.body.decode('utf-8'))
	email=file_val['Email']
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb[file_val["subject"]]
	cursor = collection.find({})
	user_exist=False
	del file_val["subject"]	
	for document in cursor:
		if document['Email']==file_val['Email']:
			del document["Answer"]
			if "Answer" not in document.keys():
				document["Answer"]={}
				document["Answer"][file_val['Question']]=[file_val["Answer"]]
			else:
				if file_val["Question"] in document["Answer"].keys():
					document["Answer"][file_val['Question']].append(file_val["Answer"])	
				else:
					document["Answer"][file_val['Question']]=[file_val["Answer"]]
			collection.save(document)
			return HttpResponse("true")

	
def Answer_List(request,path):
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	path=request.GET["subject"]

	collection=mydb[path]	
	cursor = collection.find({})
	data={}
	for document in cursor:
		try :
			data["Answer"]=document['Answer'][request.GET["question"]]
		except:
			pass

	to_return=json.dumps(data)
	return JsonResponse(data)

# Create your views here.

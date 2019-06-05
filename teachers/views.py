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
	j=True
	for document in cursor:
		if document['Email']==file_val['Email']:
			j=False
			break
	print(j)

	if j:
		collection.insert_one(file_val)

	return HttpResponse("true")



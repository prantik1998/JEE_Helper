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
class ConfigView(TemplateView):
	template_name="config.html"

@csrf_exempt
def signin_info(request):
	file_val = json.loads(request.body.decode('utf-8'))
	myclient = pymongo.MongoClient("mongodb://localhost:27017/")
	mydb = myclient["jee_db"]
	collection=mydb["teachers_name"]
	cursor = collection.find({})
	new_user=True
	for document in cursor:
		if document['Email']==file_val['Email']:
			new_user=False
			document['Subject']=file_val['Subject']
			collection.save(document)
			break

	if new_user:
		collection.insert_one(file_val)

	return HttpResponse("true")

from django.views.generic import TemplateView

# Create your views here.


class TestPapersView(TemplateView):
	template_name = 'testpapers.html'


class AboutPageView(TemplateView):
	template_name = 'about.html'

# def testpapersView(request):
#     return HttpResponse('Hello, World!')

from django.views.generic import TemplateView

# Create your views here.


class TestPapersView(TemplateView):
	template_name = 'testpapers.html'


class AboutPageView(TemplateView):
	template_name = 'about.html'


class PdfPageView(TemplateView):
	template_name = 'create_pdf.html'

# def testpapersView(request):
#     return HttpResponse('Hello, World!')

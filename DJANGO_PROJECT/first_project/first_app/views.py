from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic, AccessRecord, Webpage

# Create your views here.
def index(request):
    webPageList = AccessRecord.objects.order_by("date")
    dateDict = {"access_records":webPageList}

    return render(request, 'first_app/index.html', context=dateDict)

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('<em>INDEX PAGE</em>')

def help(request):
    myDict = {'appTwo_insert':'NOW YOU SEE ME'}

    return render(request,'appTwo/help.html',context=myDict)

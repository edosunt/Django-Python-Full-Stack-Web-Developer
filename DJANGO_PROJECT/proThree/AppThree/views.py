from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<em>Index Page</em>")

def help(request):
    helpDict = {'HelpInsert':'HELP ME'}
    return render(request,'AppThree/help.html',context=helpDict)

from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User

# Create your views here.
def index(request):
    return HttpResponse('<em>INDEX PAGE</em>')

def help(request):
    myDict = {'appTwo_insert':'NOW YOU SEE ME'}
    return render(request,'AppTwo/help.html',context=myDict)

def users(request):
    allUser = User.objects.order_by("FirstName")
    userDict = {"user_record":allUser}

    return render(request,'AppTwo/users.html',context=userDict)

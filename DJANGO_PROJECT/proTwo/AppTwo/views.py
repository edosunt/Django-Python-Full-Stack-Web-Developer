from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User
from AppTwo.forms import SignUpForm

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

def signup(request):
    form = SignUpForm()

    if request.method == 'POST':
        form = SignUpForm(request.POST)

        if form.is_valid():
            form.save(commit = True)
            return users(request)

    return render(request,'AppTwo/signup.html',{'form':form})

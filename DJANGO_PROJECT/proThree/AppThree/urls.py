from django.urls import path
from AppThree import views

urlpatterns = [
    path('',views.help,name='help'),
]

from django.urls import path
from basicApp import views

urlpatterns = [
    path('', views.form_page_view, name='forms'),
]

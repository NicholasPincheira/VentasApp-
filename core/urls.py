# core/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    
    path('calculate', views.calculate, name='calculate'),
    path('history', views.history, name='history'),
    path('configuration', views.configuration, name='configuration'),
    path('transactions', views.transactions, name='transactions')
]


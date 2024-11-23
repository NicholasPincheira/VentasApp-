# core/views.py
from django.shortcuts import render


def home(request):
    context = {
        'nombre_usuario' : "Gabriela Reyes"
    }
    
    return render(request, 'core/index.html', context)  # Assuming the file is in core/templates

def calculate(request):

    return render(request, 'core/process/calculate.html', {'active_page': 'calculate'})

def history(request):

    return render(request, 'core/process/history.html', {'active_page': 'history'})

def configuration(request):

    return render(request, 'core/process/configuration.html', {'active_page': 'configuration'})

def transactions(request):

    return render(request, 'core/process/transaction.html', {'active_page': 'transactions'})
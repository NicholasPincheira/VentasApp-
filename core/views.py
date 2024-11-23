# core/views.py
from django.shortcuts import render


def home(request):
    context = {
        'nombre_usuario' : "gabriela"
    }
    
    return render(request, 'core/index.html', context)  # Assuming the file is in core/templates

def calculate(request):

    return render(request, 'core/process/Calculate.html')
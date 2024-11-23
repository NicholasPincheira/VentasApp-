"""
WSGI config for ventasApp project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os
import sys

# Asegúrate de que el entorno virtual esté activado
path = '/home/GabrielleReyes98/proyecto/VentasApp-'
if path not in sys.path:
    sys.path.append(path)

# Asegúrate de que Django esté usando tu entorno virtual
activate_this = 'source /home/GabrielleReyes98/.virtualenvs/myenv/bin/activate'
exec(open(activate_this).read(), {'__file__': activate_this})

os.environ['DJANGO_SETTINGS_MODULE'] = 'VentasApp.settings'

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
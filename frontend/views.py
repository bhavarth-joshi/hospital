from django.shortcuts import render
from django.views.generic.detail import DetailView

from appt.models import Appt

def index(request):
    return render(request, 'frontend/index.html')


class ApptDetailView(DetailView):
    model = Appt
    template_name = 'frontend/index.html'
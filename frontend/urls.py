from django.urls import path

from .views import index, ApptDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', ApptDetailView.as_view()),
    path('delete/<int:pk>', ApptDetailView.as_view()),
]
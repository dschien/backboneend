# Create your views here.
from rest_framework import generics
from api.models import Todo
from api.serializers import TodoSerializer


class TodoView(generics.ListCreateAPIView):
    model = Todo
    serializer_class = TodoSerializer
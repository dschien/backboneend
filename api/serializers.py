from rest_framework import serializers
from api.models import Todo

__author__ = 'schien'

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
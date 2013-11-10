from django.db import models

# Create your models here.
from django.db.models import CharField, DateTimeField
from django_extensions.db.models import TimeStampedModel


class Todo(TimeStampedModel):
    name = CharField(blank=True, null=True, max_length=1024)
    due = DateTimeField(blank=True, null=True)
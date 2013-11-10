from api.views import TodoView

__author__ = 'schien'
from django.conf.urls import patterns, url

urlpatterns = patterns('',
   url(r'^todos/$', TodoView.as_view(), name='todo-view'),

)


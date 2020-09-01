from rest_framework import serializers
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .serializers import TaskSerializer, FolderSerializer
from .models import Task, Folder


class FolderViewSet(viewsets.ModelViewSet):
    serializer_class = FolderSerializer
    queryset = Folder.objects.all()


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = (DjangoFilterBackend, )
    filterset_fields = ('folder', )

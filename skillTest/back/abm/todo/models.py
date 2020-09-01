from django.db import models


class Folder(models.Model):
    name = models.TextField(max_length=100)

    def __repr__(self):
        return self.name


class Task(models.Model):
    title = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    folder = models.ForeignKey(
        'Folder', related_name='tasks', on_delete=models.CASCADE)

    def __repr__(self):
        return self.title

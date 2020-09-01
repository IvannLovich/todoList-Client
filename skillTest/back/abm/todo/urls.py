from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import TaskViewSet, FolderViewSet


router = DefaultRouter()

router.register('folders', FolderViewSet, basename='folders')
router.register('tasks', TaskViewSet, basename='tasks')
urlpatterns = router.urls


urlpatterns = [
    path('', include(router.urls)),
]

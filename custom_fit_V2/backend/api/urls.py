from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet,register_user

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
    path('api/register/', register_user, name='register_user'),
]

from django.contrib import admin
from django.urls import path ,re_path, include
from django.conf import settings
from django.conf.urls.static import static
from apps.core import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"post", views.PostViweSet)
router.register(r'notification', views.NotificationViweSet, basename='notification')
urlpatterns = [
    path("api/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("rest-auth/", include("rest_auth.urls")),
    path("admin/", admin.site.urls),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
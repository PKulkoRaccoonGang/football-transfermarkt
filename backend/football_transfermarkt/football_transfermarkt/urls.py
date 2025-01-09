"""
URL configuration for football_transfermarkt project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from players.views import TeamListView, PlayerDetailView, TeamDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/teams/', TeamListView.as_view(), name='team-list'),
    path('api/v1/teams/<int:pk>/', TeamDetailView.as_view(), name='team-detail'),
    path('api/v1/players/<int:pk>/', PlayerDetailView.as_view(), name='player-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

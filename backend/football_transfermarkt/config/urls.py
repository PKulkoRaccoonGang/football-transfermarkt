from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from teams_and_players.views import TeamListView, PlayerDetailView, TeamDetailView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/teams/', TeamListView.as_view(), name='team-list'),
    path('api/v1/teams/<int:pk>/', TeamDetailView.as_view(), name='team-detail'),
    path('api/v1/players/<int:pk>/', PlayerDetailView.as_view(), name='player-detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.urls import path
from .views import TeamListView, PlayerDetailView, TeamDetailView

urlpatterns = [
    path("teams/", TeamListView.as_view(), name="team-list"),
    path("teams/<int:pk>/", TeamDetailView.as_view(), name="team-detail"),
    path("players/<int:pk>/", PlayerDetailView.as_view(), name="player-detail"),
]

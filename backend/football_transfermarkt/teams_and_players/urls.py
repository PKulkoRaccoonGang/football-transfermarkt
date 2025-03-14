from django.urls import path, include
from .views import (
    TeamListView,
    PlayerDetailView,
    TeamDetailView,
    RegisterView,
    UserDetailView,
    chat_with_gemini,
)
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path("user/", UserDetailView.as_view(), name="user-detail"),
    path("teams/", TeamListView.as_view(), name="team-list"),
    path("teams/<int:pk>/", TeamDetailView.as_view(), name="team-detail"),
    path("player/<int:pk>/", PlayerDetailView.as_view(), name="player-detail"),
    path("chat/", chat_with_gemini, name="chat_with_gemini"),
]

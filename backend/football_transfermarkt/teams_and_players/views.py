from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer


class TeamListView(ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamDetailView(RetrieveUpdateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class PlayerDetailView(RetrieveUpdateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

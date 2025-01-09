from rest_framework import serializers
from .models import Team, Player


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = [
            "id",
            "first_name",
            "last_name",
            "birth_date",
            "nationality",
            "team",
            "position",
            "jersey_number",
            "goals_scored",
            "assists",
            "matches_played",
            "is_active",
            "photo",
        ]


class TeamSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = [
            "id",
            "name",
            "city",
            "country",
            "foundation_year",
            "stadium",
            "coach",
            "players",
            "photo",
        ]

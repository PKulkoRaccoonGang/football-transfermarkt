from rest_framework import serializers
from .models import Team, Player

class PlayerSerializer(serializers.ModelSerializer):
    """
    Serializer for the Player model.

    Provides all fields of the Player model, with the team name as a read-only field.

    Example response:
    {
        "id": 1,
        "first_name": "Lionel",
        "last_name": "Messi",
        "birth_date": "1987-06-24",
        "country_code": "ARG",
        "team": "Inter Miami",
        "market_value": "50000000.00",
        "position": "FW",
        "jersey_number": 10,
        "goals_scored": 30,
        "assists": 20,
        "matches_played": 25,
        "shots_on_target": 50,
        "pass_accuracy": "85.5",
        "dribble_success": "88.0",
        "shot_accuracy": "75.0",
        "tackle_success": "60.0",
        "tackles": 10,
        "yellow_cards": 2,
        "red_cards": 0,
        "photo": "http://example.com/media/player_photos/messi.jpg"
    }
    """
    team: serializers.CharField = serializers.CharField(source="team.name", read_only=True)

    class Meta:
        model: type[Player] = Player
        fields: str = "__all__"


class TeamSerializer(serializers.ModelSerializer):
    """
    Serializer for the Team model.

    Includes all fields of the Team model and a nested list of players as a read-only field.

    Example response:
    {
        "id": 1,
        "name": "Inter Miami",
        "city": "Miami",
        "description": "A professional football club based in Miami.",
        "country": "USA",
        "foundation_year": 2018,
        "stadium": "DRV PNK Stadium",
        "coach": "Gerardo Martino",
        "photo": "http://example.com/media/team_photos/inter_miami.jpg",
        "primary_color": "#FF69B4",
        "players": [
            {
                "id": 1,
                "first_name": "Lionel",
                "last_name": "Messi",
                "position": "FW"
            },
            {
                "id": 2,
                "first_name": "Sergio",
                "last_name": "Busquets",
                "position": "MF"
            }
        ]
    }
    """
    players: PlayerSerializer = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model: type[Team] = Team
        fields: str = "__all__"

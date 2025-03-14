import pytest
from datetime import date
from rest_framework.serializers import ValidationError
from ..models import Team, Player
from ..serializers import TeamSerializer, PlayerSerializer


@pytest.mark.django_db
class TestPlayerSerializer:
    def test_valid_serialization(self):
        team = Team.objects.create(
            name="Inter Miami",
            city="Miami",
            country="USA",
            foundation_year=2018,
            stadium="DRV PNK Stadium",
            coach="Gerardo Martino",
        )
        player = Player.objects.create(
            first_name="Lionel",
            last_name="Messi",
            birth_date=date(1987, 6, 24),
            country_code="ARG",
            team=team,
            market_value=50000000.00,
            position="FW",
            jersey_number=10,
            goals_scored=30,
            assists=20,
            matches_played=25,
            shots_on_target=50,
            pass_accuracy=85.5,
            dribble_success=88.0,
            shot_accuracy=75.0,
            tackle_success=60.0,
            tackles=10,
            yellow_cards=2,
            red_cards=0,
        )

        serializer = PlayerSerializer(player)
        data = serializer.data

        assert data["first_name"] == "Lionel"
        assert data["last_name"] == "Messi"
        assert data["team"] == "Inter Miami"
        assert data["goals_scored"] == 30
        assert data["assists"] == 20
        assert data["matches_played"] == 25


@pytest.mark.django_db
class TestTeamSerializer:
    def test_valid_serialization(self):
        """
        Проверяет, что сериализация TeamSerializer работает корректно.
        """
        team = Team.objects.create(
            name="Inter Miami",
            city="Miami",
            country="USA",
            foundation_year=2018,
            stadium="DRV PNK Stadium",
            coach="Gerardo Martino",
        )
        player1 = Player.objects.create(
            first_name="Lionel",
            last_name="Messi",
            birth_date=date(1987, 6, 24),
            country_code="ARG",
            team=team,
            position="FW",
            jersey_number=10,
        )
        player2 = Player.objects.create(
            first_name="Sergio",
            last_name="Busquets",
            birth_date=date(1988, 7, 16),
            country_code="ESP",
            team=team,
            position="MF",
            jersey_number=5,
        )

        serializer = TeamSerializer(team)
        data = serializer.data

        assert data["name"] == "Inter Miami"
        assert data["city"] == "Miami"
        assert data["country"] == "USA"
        assert data["stadium"] == "DRV PNK Stadium"
        assert len(data["players"]) == 2
        assert data["players"][1]["first_name"] == "Lionel"
        assert data["players"][0]["first_name"] == "Sergio"

    def test_invalid_data(self):
        invalid_data = {
            "name": "",
            "city": "Miami",
            "country": "USA",
            "foundation_year": 2018,
            "stadium": "DRV PNK Stadium",
            "coach": "Gerardo Martino",
        }

        serializer = TeamSerializer(data=invalid_data)
        assert not serializer.is_valid()
        assert "name" in serializer.errors

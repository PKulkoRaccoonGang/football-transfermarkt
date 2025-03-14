from django.db import models
from colorfield.fields import ColorField
from typing import Optional


class Player(models.Model):
    """
    Represents a football player with their details, including personal information,
    team affiliation, performance statistics, and photo.
    """

    POSITION_CHOICES: list[tuple[str, str]] = [
        ("GK", "Goalkeeper"),
        ("DF", "Defender"),
        ("MF", "Midfielder"),
        ("FW", "Forward"),
    ]

    first_name: str = models.CharField(max_length=50, verbose_name="First Name")
    last_name: str = models.CharField(max_length=50, verbose_name="Last Name")
    birth_date: models.DateField = models.DateField(verbose_name="Date of Birth")
    country_code: Optional[str] = models.CharField(
        max_length=3, verbose_name="Country Code", blank=True, null=True,
    )
    team: Optional["Team"] = models.ForeignKey(
        "Team", on_delete=models.SET_NULL, related_name="players",
        blank=True, null=True, verbose_name="Team",
    )
    market_value: Optional[models.DecimalField] = models.DecimalField(
        max_digits=15, decimal_places=2, verbose_name="Market Value (in USD)",
        blank=True, null=True,
    )
    position: str = models.CharField(
        max_length=2, choices=POSITION_CHOICES, verbose_name="Position"
    )
    jersey_number: Optional[int] = models.PositiveIntegerField(
        verbose_name="Jersey Number", blank=True, null=True
    )
    goals_scored: int = models.PositiveIntegerField(
        default=0, verbose_name="Goals Scored"
    )
    assists: int = models.PositiveIntegerField(
        default=0, verbose_name="Assists"
    )
    matches_played: int = models.PositiveIntegerField(
        default=0, verbose_name="Matches Played"
    )
    shots_on_target: int = models.PositiveIntegerField(
        default=0, verbose_name="Shots on Target"
    )
    pass_accuracy: Optional[models.DecimalField] = models.DecimalField(
        max_digits=5, decimal_places=2, verbose_name="Pass Accuracy (%)",
        blank=True, null=True,
    )
    dribble_success: Optional[models.DecimalField] = models.DecimalField(
        max_digits=5, decimal_places=2, verbose_name="Dribble Success (%)",
        blank=True, null=True,
    )
    shot_accuracy: Optional[models.DecimalField] = models.DecimalField(
        max_digits=5, decimal_places=2, verbose_name="Shot Accuracy (%)",
        blank=True, null=True,
    )
    tackle_success: Optional[models.DecimalField] = models.DecimalField(
        max_digits=5, decimal_places=2, verbose_name="Tackle Success (%)",
        blank=True, null=True,
    )
    tackles: int = models.PositiveIntegerField(
        default=0, verbose_name="Tackles"
    )
    yellow_cards: int = models.PositiveIntegerField(
        default=0, verbose_name="Yellow Cards"
    )
    red_cards: int = models.PositiveIntegerField(
        default=0, verbose_name="Red Cards"
    )
    photo: Optional[models.ImageField] = models.ImageField(
        upload_to="player_photos/", blank=True,
        null=True, verbose_name="Player Photo",
    )

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name} - {self.get_position_display()}"

    class Meta:
        verbose_name: str = "Player"
        verbose_name_plural: str = "Players"
        ordering: list[str] = ["last_name", "first_name"]


class Team(models.Model):
    """
    Represents a football team with its details, including name, city, country,
    foundation year, stadium, coach, and team photo.
    """

    name: str = models.CharField(
        max_length=100, unique=True, verbose_name="Team Name"
    )
    city: str = models.CharField(max_length=100, verbose_name="City")
    description: Optional[str] = models.TextField(
        blank=True, verbose_name="Description"
    )
    country: str = models.CharField(max_length=100, verbose_name="Country")
    foundation_year: int = models.PositiveIntegerField(
        verbose_name="Foundation Year"
    )
    stadium: str = models.CharField(max_length=100, verbose_name="Stadium")
    coach: str = models.CharField(max_length=100, verbose_name="Coach")
    photo: Optional[models.ImageField] = models.ImageField(
        upload_to="team_photos/", blank=True,
        null=True, verbose_name="Team Photo",
    )
    primary_color: str = ColorField(
        default="#FFFFFF", verbose_name="Primary Color",
        help_text="Choose the team's primary color"
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name: str = "Team"
        verbose_name_plural: str = "Teams"
        ordering: list[str] = ["name"]

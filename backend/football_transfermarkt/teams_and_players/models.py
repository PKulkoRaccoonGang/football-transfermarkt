from django.db import models


class Player(models.Model):
    """
    Represents a football player with their details, including personal information,
    team affiliation, performance statistics, and photo.
    """

    POSITION_CHOICES = [
        ("GK", "Goalkeeper"),
        ("DF", "Defender"),
        ("MF", "Midfielder"),
        ("FW", "Forward"),
    ]

    first_name = models.CharField(max_length=50, verbose_name="First Name")
    last_name = models.CharField(max_length=50, verbose_name="Last Name")
    birth_date = models.DateField(verbose_name="Date of Birth")
    nationality = models.CharField(max_length=50, verbose_name="Nationality")
    team = models.ForeignKey(
        "Team",
        on_delete=models.SET_NULL,
        related_name="players",
        blank=True,
        null=True,
        verbose_name="Team",
    )
    position = models.CharField(
        max_length=2, choices=POSITION_CHOICES, verbose_name="Position"
    )
    jersey_number = models.PositiveIntegerField(
        verbose_name="Jersey Number", blank=True, null=True
    )
    goals_scored = models.PositiveIntegerField(default=0, verbose_name="Goals Scored")
    assists = models.PositiveIntegerField(default=0, verbose_name="Assists")
    matches_played = models.PositiveIntegerField(
        default=0, verbose_name="Matches Played"
    )
    is_active = models.BooleanField(default=True, verbose_name="Is Active")
    photo = models.ImageField(
        upload_to="player_photos/", blank=True, null=True, verbose_name="Player Photo"
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.get_position_display()}"

    class Meta:
        verbose_name = "Player"
        verbose_name_plural = "Players"
        ordering = ["last_name", "first_name"]


class Team(models.Model):
    """
    Represents a football team with its details, including name, city, country,
    foundation year, stadium, coach, and team photo.
    """

    name = models.CharField(max_length=100, unique=True, verbose_name="Team Name")
    city = models.CharField(max_length=100, verbose_name="City")
    country = models.CharField(max_length=100, verbose_name="Country")
    foundation_year = models.PositiveIntegerField(verbose_name="Foundation Year")
    stadium = models.CharField(max_length=100, verbose_name="Stadium")
    coach = models.CharField(max_length=100, verbose_name="Coach")
    photo = models.ImageField(
        upload_to="team_photos/", blank=True, null=True, verbose_name="Team Photo"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Team"
        verbose_name_plural = "Teams"
        ordering = ["name"]

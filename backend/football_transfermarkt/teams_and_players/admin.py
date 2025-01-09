from django.contrib import admin
from django.utils.html import mark_safe
from .models import Player, Team


class PlayerAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "team",
        "position",
        "jersey_number",
        "goals_scored",
        "assists_per_match",
        "is_active",
        "get_photo_preview",
    )
    list_filter = ("team", "position", "is_active", "nationality")
    search_fields = ("first_name", "last_name", "team__name", "nationality")
    readonly_fields = ("photo_preview", "team_photo_preview")
    actions = ["make_inactive", "delete_photos"]

    def photo_preview(self, obj):
        if obj.photo:
            return mark_safe(
                f'<img src="{obj.photo.url}" style="max-height: 200px; max-width: 200px;" />'
            )
        return "No photo available"

    photo_preview.short_description = "Player Photo Preview"

    def team_photo_preview(self, obj):
        if obj.team and obj.team.photo:
            return mark_safe(
                f'<img src="{obj.team.photo.url}" style="max-height: 200px; max-width: 200px;" />'
            )
        return "No team photo available"

    team_photo_preview.short_description = "Team Photo Preview"

    def get_photo_preview(self, obj):
        if obj.photo:
            return mark_safe(
                f'<img src="{obj.photo.url}" style="max-height: 50px; max-width: 50px;" />'
            )
        return "No photo"

    get_photo_preview.short_description = "Player Preview"

    def assists_per_match(self, obj):
        if obj.matches_played > 0:
            return round(obj.assists / obj.matches_played, 2)
        return 0

    assists_per_match.short_description = "Assists per Match"

    def make_inactive(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f"{updated} players were marked as inactive.")

    make_inactive.short_description = "Mark selected players as inactive"

    def delete_photos(self, request, queryset):
        count = 0
        for player in queryset:
            if player.photo:
                player.photo.delete()
                count += 1
        self.message_user(request, f"Photos for {count} players were deleted.")

    delete_photos.short_description = "Delete photos of selected players"

    ordering = ["last_name", "-goals_scored"]


class TeamAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "city",
        "country",
        "foundation_year",
        "stadium",
        "coach",
        "players_count",
        "get_photo_preview",
    )
    search_fields = ("name", "city", "country", "coach", "stadium")
    list_filter = ("country", "foundation_year")
    readonly_fields = ("photo_preview", "players_list")
    actions = ["delete_photos"]

    def photo_preview(self, obj):
        if obj.photo:
            return mark_safe(
                f'<img src="{obj.photo.url}" style="max-height: 200px; max-width: 200px;" />'
            )
        return "No photo available"

    photo_preview.short_description = "Photo Preview"

    def get_photo_preview(self, obj):
        if obj.photo:
            return mark_safe(
                f'<img src="{obj.photo.url}" style="max-height: 50px; max-width: 50px;" />'
            )
        return "No photo"

    get_photo_preview.short_description = "Preview"

    def players_count(self, obj):
        return obj.players.count()

    players_count.short_description = "Players Count"

    def players_list(self, obj):
        players = obj.players.all()
        if not players.exists():
            return "No players in this team."

        player_list = []
        for player in players:
            player_photo = (
                f'<img src="{player.photo.url}" style="max-height: 50px; max-width: 50px; border-radius: 5px;" />'
                if player.photo
                else "No photo"
            )
            player_info = f"{player_photo} {player.first_name} {player.last_name} (#{player.jersey_number})"
            player_list.append(player_info)

        return mark_safe("<br>".join(player_list))

    players_list.short_description = "Players"

    def delete_photos(self, request, queryset):
        count = 0
        for team in queryset:
            if team.photo:
                team.photo.delete()
                count += 1
        self.message_user(request, f"Photos for {count} teams were deleted.")

    delete_photos.short_description = "Delete photos of selected teams"

    ordering = ["name"]


admin.site.register(Player, PlayerAdmin)
admin.site.register(Team, TeamAdmin)

from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, CreateAPIView
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer

import google.generativeai as genai

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.serializers import ModelSerializer, CharField
from rest_framework.views import APIView
from django.conf import settings
from rest_framework.decorators import api_view


genai.configure(api_key=settings.GOOGLE_GEMINI_API_KEY)

# TODO: Create separate django app
class RegisterSerializer(ModelSerializer):
    password = CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("username", "email", "password")

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        user = User.objects.get(username=response.data["username"])
        refresh = RefreshToken.for_user(user)
        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": response.data,
            },
            status=status.HTTP_201_CREATED,
        )


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email"]


class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


# TODO: Create separate django app
class TeamListView(ListAPIView):
    """API view for retrieving a list of all teams."""
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamDetailView(RetrieveUpdateAPIView):
    """API view for retrieving and updating details of a specific team."""
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

# TODO: Create separate django app
class PlayerDetailView(RetrieveUpdateAPIView):
    """API view for retrieving and updating details of a specific player."""
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

# TODO: Create separate django app
@api_view(["POST"])
def chat_with_gemini(request):
    user_message = request.data.get("message", "")

    if not user_message:
        return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content(user_message)

        return Response({"reply": response.text})

    except Exception as e:
        return Response({"error": f"Server error: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

from rest_framework import serializers
from .models import Poll, Option, Voice, Profile, Comment, Tag, Room, Answer, Notification
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.core.exceptions import ValidationError
from django.shortcuts import get_object_or_404

class OptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'text')

class TagNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class PollSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(many=False)
    tags = TagNameSerializer(many=True, read_only=True)
    options = OptionSerializer(many=True, read_only=True)
    class Meta:
        model = Poll
        fields = ['id', 'question', 'author', 'created_at', 'views', 'tags', 'color', 'options']

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'text', 'poll']

class VoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Voice
        fields = ['id', 'option']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'name', 'city', 'email', 'avatar', 'cover', 'post_text', 'post_image', 'post_title', 'post_created_at', 'webcite', 'color']

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False, read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'profile']

class UserSignUpSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', ]

    def validate_email(self, value):
        exist_contact = User.objects.filter(email=value)
        if exist_contact:
            email = get_object_or_404(User, email=value)
            if email != '':
                raise serializers.ValidationError('Указанная почта уже используется')
        return value


class MainProfileInfoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'name', 'avatar']

class CreateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'poll', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    author = MainProfileInfoSerializer(many=False)
    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'poll', 'created_at']

class RoomSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'author', 'created_at', 'message', 'views']

class CreateRoomSerializer(serializers.ModelSerializer):
    tags = TagNameSerializer(many=True, read_only=True)
    class Meta:
        model = Room
        fields = ['id', 'name', 'author', 'created_at', 'message', 'views', 'tags', 'color']

class RoomSerializer(serializers.ModelSerializer):
    author = MainProfileInfoSerializer(many=False)
    tags = TagNameSerializer(many=True, read_only=True)
    class Meta:
        model = Room
        fields = ['id', 'name', 'author', 'created_at', 'message', 'views', 'tags', 'color']

class RoomListSerializer(serializers.ModelSerializer):
    author = MainProfileInfoSerializer(many=False)
    answers_count = serializers.IntegerField(
        source='answers.count',
        read_only=True
    )
    class Meta:
        model = Room
        fields = ['id', 'name', 'author', 'answers_count']


class AnswerSerializer(serializers.ModelSerializer):
    author = MainProfileInfoSerializer(many=False)
    class Meta:
        model = Answer
        fields = ['id', 'text', 'author', 'room', 'created_at']

class CreateAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id', 'text', 'author', 'room', 'created_at']

class NotificationSerializer(serializers.ModelSerializer):
    sender = MainProfileInfoSerializer(many=False, read_only=True)
    class Meta:
        model = Notification
        fields = ['id', 'text', 'type', 'created_at', 'object', 'sender']

class NotificationCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'text', 'type', 'created_at', 'object', 'sender', 'recipients']






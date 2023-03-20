from .models import Poll, Option, Voice, Profile, Comment, Tag, Room, Answer, Notification
from .serializers import PollSerializer, VoiceSerializer, OptionSerializer, UserSerializer, UserSignUpSerializer, ProfileSerializer, \
    CommentSerializer, CreateCommentSerializer, TagNameSerializer, RoomSerializer, RoomListSerializer, RoomSimpleSerializer, AnswerSerializer, \
    CreateAnswerSerializer, CreateRoomSerializer, NotificationSerializer, NotificationCreateSerializer
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from django.http.response import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import login
from rest_framework.parsers import MultiPartParser
from django.db.models import Q
from django.db.models import F
from django.db.models import Count
import redis
from django.conf import settings

redis_storage = redis.StrictRedis(host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=0)
class TestView(viewsets.ViewSet):
    def get_key(self, *args, **kwargs):
        value = redis_storage.get(1)
        if value:
            response = {
                'key': 1,
                'value': value,
                'msg': 'Success'
            }
            return Response(response, status=200)
        else:
            response = {
                'key': 1,
                'value': None,
                'msg': 'Not found'
            }
            return Response(response, status=404)
    
class PollView(viewsets.ViewSet):
    def list(self, request):
        queryset = Poll.objects.all()
        serializer = PollSerializer(queryset, many=True)
        return Response({'polls': serializer.data})

    def retrieve(self, request, pk=None):
        queryset = Poll.objects.all()
        poll = get_object_or_404(queryset, pk=pk)
        serializer = PollSerializer(poll)
        return Response(serializer.data)

    def create(self, request):
        serializer_class = PollSerializer
        data = request.data
        tags = request.POST.getlist('tags[]')
        serializer = PollSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            new_poll = serializer.save(author=user, tags=tags)
            return JsonResponse({"data": data,'poll_id':new_poll.id, 'tags':tags}, safe=False)

    def poll_list(self, request):
        tags = request.POST.getlist('tags[]')
        search_str = request.POST.get('search_str')
        section = request.POST.get('section')
        showed_polls_count = int(request.POST.get('showed_polls_count'))
        user_id = request.user.id
        poll_list = Poll.objects.all()
        # sections: 1 - популярное, 2 - новое, 3 - избранное
        if section == '3':
            poll_list = poll_list.filter(saved_by=(user_id)).distinct()
        if tags != []:
            poll_list = poll_list.filter(tags__in=(tags)).distinct()
        if search_str != '':
            poll_list = poll_list.filter(Q(question__icontains=search_str)).distinct()
        if section == '2':
            poll_list = poll_list.order_by('-created_at')
        if section == '1':
            poll_list = poll_list.order_by('views')
        poll_list = poll_list[showed_polls_count:showed_polls_count+30]
        polls_count = poll_list.count()
        serializer = PollSerializer(poll_list, many=True)
        return Response({'polls': serializer.data, 'polls_count': polls_count})

    def get_voice(self, request, id):
        voices = Voice.objects.filter(option__poll__pk = id, author = request.user)
        serializer = VoiceSerializer(voices, many=True)
        if(serializer.data != []):
            return Response(1)
        else:
            return Response(0)

    def save_poll(self, request, poll_id):
        saved_status = int(request.POST.get('saved_status'))
        user = request.user
        queryset = Poll.objects.all()
        poll = get_object_or_404(queryset, pk=poll_id)
        if saved_status == 0:
            poll.saved_by.add(user)
            poll.save()
            status = 1
        else:
            poll.saved_by.remove(user)
            poll.save()
            status = 0
        return JsonResponse(status, safe=False)

class TagView(viewsets.ViewSet):
    def list_filter(self, request):
        queryset = Tag.objects.all().annotate(cnt=Count('poll')).order_by('-cnt').distinct()
        search_str = request.POST.get('search_str')
        tag_list = queryset.filter(Q(name__icontains=search_str)).distinct()[:10]
        serializer = TagNameSerializer(tag_list, many=True)
        return Response({'tags': serializer.data})

    def room_list_filter(self, request):
        queryset = Tag.objects.all().annotate(cnt=Count('room')).order_by('-cnt').distinct()
        search_str = request.POST.get('search_str')
        tag_list = queryset.filter(Q(name__icontains=search_str)).distinct()[:10]
        serializer = TagNameSerializer(tag_list, many=True)
        return Response({'tags': serializer.data})

    def popular_list(self, request):
        queryset = Tag.objects.all().annotate(cnt=Count('room')).order_by('-cnt').distinct()
        serializer = TagNameSerializer(queryset, many=True)
        return Response({'tags': serializer.data})

class OptionView(viewsets.ViewSet):
    def create(self, request, poll_id):
        data = request.data
        text = data.get('text')
        option_data = {
            'text': text,
            'poll': poll_id
        }
        serializer = OptionSerializer(data=option_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse({"data": data}, safe=False)

class VoiceView(viewsets.ViewSet):
    def create(self, request):
        data = request.data
        user = request.user
        serializer = VoiceSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(author=user)
            return JsonResponse({"data": data}, safe=False)
        else:
            return JsonResponse({"data": 'ОШИБКА'}, safe=False)

    def get_voices(self, request, poll_id):
        options = Option.objects.filter(poll__pk=poll_id)
        voices_list = []
        for opt in options:
            voices = Voice.objects.all().filter(option=opt.id)
            count = len(voices)
            voices_list.append(count)
        return Response(voices_list)

class UserView(viewsets.ViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def create(self, request):
        data = request.data
        serializer = UserSignUpSerializer(data=data)
        if not serializer.is_valid():
            return JsonResponse(status=400, data=serializer.errors)
        user = serializer.save()
        login(request, user)
        return JsonResponse({"data": data}, safe=False)

    def retrieve(self, request):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=request.user.pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def login(self, request):
        data = request.data
        user = data.get_user()
        login(request, user)
        return JsonResponse({"res": data}, safe=False)

class ProfileView(viewsets.ViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    parser_classes = (MultiPartParser,)

    def create(self, request):
        data = request.data
        user = request.user
        serializer = ProfileSerializer(data=data)
        if not serializer.is_valid():
            return JsonResponse(status=400, data=serializer.errors)
        serializer.save(user=user)
        return Response({"data": serializer.data})

    def retrieve_by_id(self, request, user_id):
        queryset = Profile.objects.all()
        profile = get_object_or_404(queryset, pk=user_id)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def retrieve_my_profile(self, request):
        queryset = Profile.objects.all()
        profile = get_object_or_404(queryset, pk=request.user.profile.pk)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def update(self, request):
        queryset = Profile.objects.all()
        profile = get_object_or_404(queryset, pk=request.user.profile.pk)
        serializer = ProfileSerializer(profile, data=request.data)
        if not serializer.is_valid():
            return JsonResponse(status=400, data=serializer.errors)
        serializer.save()
        return Response(serializer.data)

class CommentView(viewsets.ViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def create(self, request, poll_id):
        data = request.data
        user = request.user
        profile = Profile.objects.get(pk=user.pk)
        text = data.get('text')
        option_data = {
            'text': text,
            'poll': poll_id,
            'author': user.profile.pk
        }
        serializer = CreateCommentSerializer(data=option_data)
        if not serializer.is_valid():
            return JsonResponse(status=400, data=serializer.errors)
        serializer.save()
        comment = Comment.objects.get(pk=serializer.data.get('id'))
        show_serializer = CommentSerializer(comment)
        return Response(show_serializer.data)

    def retrieve(self, request, poll_id):
        comments = Comment.objects.filter(poll__pk = poll_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

class RoomView(viewsets.ViewSet):
    def room_list(self, request):
        tags = request.POST.getlist('tags[]')
        search_str = request.POST.get('search_str')
        section = request.POST.get('section')
        showed_rooms_count = int(request.POST.get('showed_rooms_count'))
        user_id = request.user.id
        room_list = Room.objects.all()
        # sections: 1 - popular
        if section == "3":
            room_list = room_list.filter(author__pk=(user_id)).distinct()
        if section == "1":
            room_list = room_list.order_by('-views')
        if search_str != '':
            room_list = room_list.filter(Q(name__icontains=search_str)).distinct()
        if tags != []:
            room_list = room_list.filter(tags__in=(tags)).distinct()
        if section == "2":
            room_list = room_list.order_by('-created_at')
        if section == "4":
            room_list = room_list.filter(saved_by=(user_id)).distinct()
        room_list = room_list[showed_rooms_count:showed_rooms_count+10]
        serializer = RoomListSerializer(room_list, many=True)
        rooms_count = room_list.count()
        return Response({'rooms': serializer.data, 'rooms_count': rooms_count})

    def retrieve(self, request, pk):
        queryset = Room.objects.all()
        room = get_object_or_404(queryset, pk=pk)
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    def create(self, request):
        data = request.data
        tags = request.POST.getlist('tags[]')
        user = request.user.profile
        serializer = CreateRoomSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_room = serializer.save(author=user, tags=tags)
            return JsonResponse({"data": data,'room_id':new_room.id, 'tags':tags}, safe=False)

    def save_room(self, request, room_id):
        saved_status = int(request.POST.get('saved_status'))
        user = request.user
        queryset = Room.objects.all()
        room = get_object_or_404(queryset, pk=room_id)
        if saved_status == 0:
            room.saved_by.add(user)
            room.save()
            status = 1
        else:
            room.saved_by.remove(user)
            room.save()
            status = 0
        return JsonResponse(status, safe=False)


class AnswerView(viewsets.ViewSet):
    def list(self, request, room_id):
        queryset = Answer.objects.all().filter(room__pk=room_id)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, room_id):
        data = request.data
        user = request.user
        profile = Profile.objects.get(pk=user.pk)
        text = data.get('text')
        option_data = {
            'text': text,
            'room': room_id,
            'author': user.profile.pk
        }
        serializer = CreateAnswerSerializer(data=option_data)
        if not serializer.is_valid():
            return JsonResponse(status=400, data=serializer.errors)
        serializer.save()
        return Response(serializer.data.get('id'))

class NotificationView(viewsets.ViewSet):
    def list(self, request):
        user = request.user
        queryset = Notification.objects.all().filter(recipients=user)[:10]
        serializer = NotificationSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        data = request.data
        user = request.user
        #profile = Profile.objects.get(pk=user.pk)
        text = data.get('text')
        recipients = data.getlist('recipients[]')
        type = data.get('type')
        object = data.get('object')
        option_data = {
            'text': text,
            'object': object,
            'type': type,
            'recipients': recipients,
            'sender': user.profile.pk
        }
        serializer = NotificationCreateSerializer(data=option_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
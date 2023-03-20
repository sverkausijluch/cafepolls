from django.urls import path
from .views import PollView, VoiceView, OptionView, UserView, ProfileView, CommentView, \
    TagView, RoomView, AnswerView, NotificationView, TestView

urlpatterns = [
    path('polls', PollView.as_view({'get': 'list'})),
    path('polls-filter', PollView.as_view({'post': 'poll_list'})),
    path('poll/<int:pk>', PollView.as_view({'get': 'retrieve'})),
    path('create-poll/', PollView.as_view({'post': 'create'})),
    path('save-poll/<int:poll_id>', PollView.as_view({'post': 'save_poll'})),
    path('is-my-voice/<int:id>', PollView.as_view({'get': 'get_voice'})),
    path('add-options/<int:poll_id>', OptionView.as_view({'post': 'create'})),
    path('send-voice', VoiceView.as_view({'post': 'create'})),
    path('get-voices/<int:poll_id>', VoiceView.as_view({'get': 'get_voices'})),
    path('tags-filter', TagView.as_view({'post': 'list_filter'})),
    path('popular-tags', TagView.as_view({'get': 'popular_list'})),
    path('create-user', UserView.as_view({'post': 'create'})),
    path('get-profile/<int:user_id>', ProfileView.as_view({'get': 'retrieve_by_id'})),
    path('get-my-profile', ProfileView.as_view({'get': 'retrieve_my_profile'})),
    path('edit-profile', ProfileView.as_view({'post': 'update'})),
    path('get-user', UserView.as_view({'get': 'retrieve'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('create-profile', ProfileView.as_view({'post': 'create'})),
    path('create-comment/<int:poll_id>', CommentView.as_view({'post': 'create'})),
    path('comments/<int:poll_id>', CommentView.as_view({'get': 'retrieve'})),
    path('get-rooms-list', RoomView.as_view({'post': 'room_list'})),
    path('room-tags-filter', TagView.as_view({'post': 'room_list_filter'})),
    path('room/<int:pk>', RoomView.as_view({'get': 'retrieve'})),
    path('save-room/<int:room_id>', RoomView.as_view({'post': 'save_room'})),
    path('create-room/', RoomView.as_view({'post': 'create'})),
    path('answers/<int:room_id>', AnswerView.as_view({'get': 'list'})),
    path('create-answer/<int:room_id>', AnswerView.as_view({'post': 'create'})),
    path('get-notifications', NotificationView.as_view({'get': 'list'})),
    path('add-notification', NotificationView.as_view({'post': 'create'})),
    path('mao', TestView.as_view({'get': 'get_key'}))
]
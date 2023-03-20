from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json

class UserConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = str(self.scope['url_route']['kwargs']['user_id'])
        self.room_group_name = 'user' + self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        type = text_data_json['type']
        notif_type = text_data_json['notif_type']
        object = text_data_json['object']
        text = text_data_json['text']
        created_at = text_data_json['created_at']
        recipients = text_data_json['recipients']
        sender = text_data_json['sender']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': type,
                'recipients': recipients,
                'notif_type': notif_type,
                'object': object,
                'text': text,
                'created_at': created_at,
                'sender': sender,
            }
        )

    def thanks(self, event):
        recipients = event['recipients']
        notif_type = event['notif_type']
        object = event['object']
        text = event['text']
        created_at = event['created_at']
        sender = event['sender']

        self.send(text_data=json.dumps({
                'recipients': recipients,
                'notif_type': notif_type,
                'object': object,
                'text': text,
                'created_at': created_at,
                'sender': sender,
        }))

class CommentsConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = str(self.scope['url_route']['kwargs']['poll_id'])
        self.room_group_name = 'poll_comments' + self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        created_at = text_data_json['created_at']
        text = text_data_json['text']
        username = text_data_json['username']
        avatar = text_data_json['avatar']
        id = text_data_json['id']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'comment',
                'text': text,
                'created_at': created_at,
                'username': username,
                'avatar': avatar,
                'id': id,
            }
        )

    def comment(self, event):
        poll = self.room_name
        created_at = event['created_at']
        text = event['text']
        username = event['username']
        avatar = event['avatar']
        id = event['id']

        self.send(text_data=json.dumps({
            'poll': poll,
            'created_at': created_at,
            'text': text,
            'username': username,
            'avatar': avatar,
            'id': id,
        }))

class PollConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = str(self.scope['url_route']['kwargs']['poll_id'])
        self.room_group_name = 'poll' + self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        selected_option = text_data_json['selected_option']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'voice',
                'selected_option': selected_option,
            }
        )

    def voice(self, event):
        selected_option = event['selected_option']

        self.send(text_data=json.dumps({
            'selected_option': selected_option,
        }))

class NewPollConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'newpolls'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        is_new_poll = text_data_json['is_new_poll']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'new_poll',
                'is_new_poll': is_new_poll,
            }
        )

    def new_poll(self, event):
        is_new_poll = event['is_new_poll']

        self.send(text_data=json.dumps({
            'is_new_poll': is_new_poll,
        }))

class NewRoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'newrooms'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        is_new_room = text_data_json['is_new_room']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'new_room',
                'is_new_room': is_new_room,
            }
        )

    def new_room(self, event):
        is_new_room = event['is_new_room']

        self.send(text_data=json.dumps({
            'is_new_room': is_new_room,
        }))

class RoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = str(self.scope['url_route']['kwargs']['room_id'])
        self.room_group_name = 'room' + self.room_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )
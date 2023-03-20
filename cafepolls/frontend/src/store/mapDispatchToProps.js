import { bindActionCreators } from 'redux';
import add_poll from './actioncreators/addpoll.js'
import set_poll from './actioncreators/setpoll.js'
import set_polls from './actioncreators/setpolls.js'
import set_poll_section from './actioncreators/setpollsection.js'
import set_window from './actioncreators/setwindow.js'
import set_user from './actioncreators/setuser.js'
import set_comment from './actioncreators/setcomment.js'
import set_comments_block from './actioncreators/setcommentsblock.js'
import set_comments from './actioncreators/setcomments.js'
import set_tag from './actioncreators/settag.js'
import set_tags from './actioncreators/settags.js'
import send_voice from './actioncreators/sendvoice.js'
import set_voice from './actioncreators/setvoice.js'
import set_voices from './actioncreators/setvoices.js'
import set_room from './actioncreators/setroom.js'
import set_rooms from './actioncreators/setrooms.js'
import set_room_tag from './actioncreators/setroomtag.js'
import set_room_tags from './actioncreators/setroomtags.js'
import set_poll_form_tag from './actioncreators/setpollformtag.js'
import set_active_room from './actioncreators/setactiveroom.js'
import set_answers from './actioncreators/setanswers.js'
import set_room_section from './actioncreators/setroomsection.js'
import set_voices_count from './actioncreators/setvoicescount.js'
import set_sended_polls from './actioncreators/setsendedpolls.js'
import set_new_polls_count from './actioncreators/setnewpollscount.js'
import add_polls from './actioncreators/addpolls.js'
import set_rooms_form_tag from './actioncreators/setroomsformtag.js'
import set_rooms_form_tags from './actioncreators/setroomsformtags.js'
import set_new_rooms_count from './actioncreators/setnewroomscount.js'
import set_poll_saved from './actioncreators/setpollsaved.js'
import set_room_saved from './actioncreators/setroomsaved.js'
import set_notifications from './actioncreators/setnotifications.js'
import add_notification from './actioncreators/addnotification.js'

function mapDispatchToProps(component) { 
    switch(component) {
        case "PollsFilter": return function(dispatch) {
            return {
				set_voice: bindActionCreators(set_voice, dispatch),
				set_voices: bindActionCreators(set_voices, dispatch),
				send_voice: bindActionCreators(send_voice, dispatch),
                set_poll_section: bindActionCreators(set_poll_section, dispatch),
                set_window: bindActionCreators(set_window, dispatch),
                set_new_polls_count: bindActionCreators(set_new_polls_count, dispatch),
			}
        }
        case "PollsList": return function(dispatch) {
            return {
				set_poll: bindActionCreators(set_poll, dispatch),
				set_comments_block: bindActionCreators(set_comments_block, dispatch),
				set_comments: bindActionCreators(set_comments, dispatch),
				set_polls: bindActionCreators(set_polls, dispatch),
				add_polls: bindActionCreators(add_polls, dispatch),
			}
        }
        case "PollForm": return function(dispatch) {
            return {
				set_tag: bindActionCreators(set_tag, dispatch),
				set_tags: bindActionCreators(set_tags, dispatch),
				set_sended_polls: bindActionCreators(set_sended_polls, dispatch),
			}
        }
        case "RoomsForm": return function(dispatch) {
            return {
				set_tag: bindActionCreators(set_rooms_form_tag, dispatch),
				set_tags: bindActionCreators(set_rooms_form_tags, dispatch),
				set_new_rooms_count: bindActionCreators(set_new_rooms_count, dispatch),
			}
        }
        case "Poll": return function(dispatch) {
            return {
				set_poll: bindActionCreators(set_poll, dispatch),
			}
        }
        case "PollHeader": return function(dispatch) {
            return {
				set_poll_saved: bindActionCreators(set_poll_saved, dispatch),
			}
        }
        case "Question": return function(dispatch) {
            return {
				set_poll: bindActionCreators(set_poll, dispatch),
			};
        }
        case "PollOptions": return function(dispatch) {
            return {
				set_voice: bindActionCreators(set_voice, dispatch),
				set_voices: bindActionCreators(set_voices, dispatch),
				set_voices_count: bindActionCreators(set_voices_count, dispatch),
				send_voice: bindActionCreators(send_voice, dispatch),
			}
        }
        case "PollFooter": return function(dispatch) {
            return {
				set_poll: bindActionCreators(set_poll, dispatch),
				set_comments_block: bindActionCreators(set_comments_block, dispatch),
				send_voice: bindActionCreators(send_voice, dispatch),
			}
        }
        case "Comments": return function(dispatch) {
            return {
				set_comment: bindActionCreators(set_comment, dispatch),
				set_comments: bindActionCreators(set_comments, dispatch),
				set_comments_block: bindActionCreators(set_comments_block, dispatch),
			}
        }
        case "CreatePoll": return function(dispatch) {
            return {
				set_window: bindActionCreators(set_window, dispatch),
			}
        }
        case "CreateRoom": return function(dispatch) {
            return {
				set_window: bindActionCreators(set_window, dispatch),
			}
        }
        case "CiteHeader": return function(dispatch) {
            return {
				set_user: bindActionCreators(set_user, dispatch),
				add_notification: bindActionCreators(add_notification, dispatch),
			}
        }
        case "RoomList": return function(dispatch) {
            return {
				set_rooms: bindActionCreators(set_rooms, dispatch),
			}
        }
        case "TagFilter": return function(dispatch) {
            return {
				set_room_tag: bindActionCreators(set_room_tag, dispatch),
				set_room_tags: bindActionCreators(set_room_tags, dispatch),
				set_tag: bindActionCreators(set_tag, dispatch),
				set_tags: bindActionCreators(set_tags, dispatch),
				set_poll_form_tag: bindActionCreators(set_poll_form_tag, dispatch),
			}
        }
        case "RoomHeader": return function(dispatch) {
            return {
				set_room: bindActionCreators(set_active_room, dispatch),
				set_room_saved: bindActionCreators(set_room_saved, dispatch),
			}
        }
        case "RoomsHeader": return function(dispatch) {
            return {
				set_room_section: bindActionCreators(set_room_section, dispatch),
                set_window: bindActionCreators(set_window, dispatch),
			}
        }
        case "RoomAnswers": return function(dispatch) {
            return {
				set_answers: bindActionCreators(set_answers, dispatch)
			}
        }
        case "Notifications": return function(dispatch) {
            return {
				set_notifications: bindActionCreators(set_notifications, dispatch)
			}
        }
        default: return undefined;
    }
}

export default mapDispatchToProps
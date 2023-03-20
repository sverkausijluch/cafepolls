import { combineReducers } from 'redux'
import active_poll from './active_poll'
import polls from './polls'
import window from './set_window'
import user from './user'
import comments from './comments'
import comments_block from './comments_block'
import tags from './tags'
import voice_sended from './voice_sended'
import voices from './voices'
import rooms from './rooms'
import room_tags from './room_tags'
import room from './room'
import answers from './answers'
import room_section from './room_section'
import poll_section from './poll_section'
import voices_count from './voices_count'
import poll_form_tags from './poll_form_tags'
import sended_polls from './sended_polls'
import new_polls_count from './new_polls_count'
import rooms_form_tags from "./rooms_form_tags"
import new_rooms_count from "./new_rooms_count"
import poll_saved from "./poll_saved"
import room_saved from "./room_saved"
import notifications from "./notifications"

const reducers = combineReducers({
    polls,
    active_poll,
    window,
    user,
    comments,
    comments_block,
    tags,
    poll_section,
    voice_sended,
    voices,
    rooms,
    room_tags,
    room,
    answers,
    room_section,
    voices_count,
    poll_form_tags,
    sended_polls,
    new_polls_count,
    rooms_form_tags,
    new_rooms_count,
    poll_saved,
    room_saved,
    notifications,
})

export default reducers
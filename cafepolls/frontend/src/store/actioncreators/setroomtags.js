import SET_ROOM_TAGS from '../actions/setroomtags.js'

function set_room_tags(value) {
    return {
        type: SET_ROOM_TAGS,
        value: value
    }
}

export default set_room_tags
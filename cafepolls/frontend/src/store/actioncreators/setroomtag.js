import SET_ROOM_TAG from '../actions/setroomtag.js'

function set_room_tag(value) {
    return {
        type: SET_ROOM_TAG,
        value: value
    }
}

export default set_room_tag
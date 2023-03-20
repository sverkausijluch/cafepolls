import SET_ROOM_SAVED from '../actions/setroomsaved.js'

function set_room_saved(value) {
    return {
        type: SET_ROOM_SAVED,
        value: value
    }
}

export default set_room_saved
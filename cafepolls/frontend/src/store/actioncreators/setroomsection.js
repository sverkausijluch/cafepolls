import SET_ROOM_SECTION from '../actions/setroomsection.js'

function set_room_section(value) {
    return {
        type: SET_ROOM_SECTION,
        value: value
    }
}

export default set_room_section
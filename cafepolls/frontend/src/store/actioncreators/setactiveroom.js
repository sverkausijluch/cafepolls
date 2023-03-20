import SET_ACTIVE_ROOM from '../actions/setactiveroom.js'

function set_active_room(value) {
    return {
        type: SET_ACTIVE_ROOM,
        value: value
    }
}

export default set_active_room
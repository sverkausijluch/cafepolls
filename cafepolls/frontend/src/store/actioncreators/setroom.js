import SET_ROOM from '../actions/setroom.js'

function set_room(value) {
    return {
        type: SET_ROOM,
        value: value
    }
}

export default set_room
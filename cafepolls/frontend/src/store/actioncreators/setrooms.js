import SET_ROOMS from '../actions/setrooms.js'

function set_rooms(value) {
    return {
        type: SET_ROOMS,
        value: value
    }
}

export default set_rooms
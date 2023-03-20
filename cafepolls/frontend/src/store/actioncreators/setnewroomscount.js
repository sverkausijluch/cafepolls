import SET_NEW_ROOMS_COUNT from '../actions/setnewroomscount.js'

function set_new_rooms_count(value) {
    return {
        type: SET_NEW_ROOMS_COUNT,
        value: value
    }
}

export default set_new_rooms_count
import SET_POLL from '../actions/setpoll.js'

function set_poll(value) {
    return {
        type: SET_POLL,
        value: value
    }
}

export default set_poll
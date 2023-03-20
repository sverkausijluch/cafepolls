import SET_POLL_SECTION from '../actions/setpollsection.js'

function set_poll_section(value) {
    return {
        type: SET_POLL_SECTION,
        value: value
    }
}

export default set_poll_section
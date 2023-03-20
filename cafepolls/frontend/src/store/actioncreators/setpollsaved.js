import SET_POLL_SAVED from "../actions/setpollsaved";

function set_poll_saved(value) {
    return {
        type: SET_POLL_SAVED,
        value: value
    }
}

export default set_poll_saved
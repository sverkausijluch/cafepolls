import SET_NEW_POLLS_COUNT from '../actions/setnewpollscount.js'

function set_new_polls_count(value) {
    return {
        type: SET_NEW_POLLS_COUNT,
        value: value
    }
}

export default set_new_polls_count
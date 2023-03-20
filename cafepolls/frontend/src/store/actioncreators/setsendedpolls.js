import SET_SENDED_POLLS from '../actions/setsendedpolls.js'

function set_sended_polls(value) {
    return {
        type: SET_SENDED_POLLS,
        value: value
    }
}

export default set_sended_polls
import SET_POLLS from '../actions/setpolls.js'

function set_polls(value) {
    return {
        type: SET_POLLS,
        value: value
    }
}

export default set_polls
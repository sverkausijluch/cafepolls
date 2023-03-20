import SET_VOICE from '../actions/setvoice.js'

function set_voice(value) {
    return {
        type: SET_VOICE,
        value: value
    }
}

export default set_voice
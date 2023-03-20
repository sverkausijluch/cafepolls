import SET_VOICES from '../actions/setvoices.js'

function set_voices(value) {
    return {
        type: SET_VOICES,
        value: value
    }
}

export default set_voices
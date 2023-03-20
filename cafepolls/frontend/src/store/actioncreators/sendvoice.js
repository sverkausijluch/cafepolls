import SEND_VOICE from '../actions/sendvoice.js'

function send_voice(value) {
    return {
        type: SEND_VOICE,
        value: value
    }
}

export default send_voice
import SEND_VOICE from '../actions/sendvoice.js'
import initialState from '../initialState.js'


export default function voice_sended(state=initialState.voice_sended, action) {
    switch(action.type) {
        case SEND_VOICE: return state = action.value
        default: return state;
    }
}

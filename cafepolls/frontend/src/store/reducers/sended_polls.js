import SET_SENDED_POLLS from '../actions/setsendedpolls.js'
import initialState from '../initialState.js'


export default function sended_polls(state=initialState.sended_polls, action) {
    switch(action.type) {
        case SET_SENDED_POLLS: return state = action.value
        default: return state;
    }
}

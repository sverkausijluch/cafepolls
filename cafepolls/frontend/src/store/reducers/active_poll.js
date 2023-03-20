import SET_POLL from '../actions/setpoll.js'
import initialState from '../initialState.js'


export default function active_poll(state=initialState.active_poll, action) {
    switch(action.type) {
        case SET_POLL: return state = action.value
        default: return state;
    }
}

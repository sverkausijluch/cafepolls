import SET_POLL_SAVED from '../actions/setpollsaved.js'
import initialState from '../initialState.js'


export default function poll_saved(state=initialState.poll_saved, action) {
    switch(action.type) {
        case SET_POLL_SAVED: return state = action.value
        default: return state;
    }
}

import SET_POLL_SECTION from '../actions/setpollsection.js'
import initialState from '../initialState.js'


export default function poll_section(state=initialState.poll_section, action) {
    switch(action.type) {
        case SET_POLL_SECTION: return state = action.value
        default: return state;
    }
}

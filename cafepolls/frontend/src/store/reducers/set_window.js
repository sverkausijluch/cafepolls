import SET_WINDOW from '../actions/setwindow.js'
import initialState from '../initialState.js'


export default function window(state=initialState.window, action) {
    switch(action.type) {
        case SET_WINDOW: return state = action.value
        default: return state;
    }
}

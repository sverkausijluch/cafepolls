import SET_USER from '../actions/setuser.js'
import initialState from '../initialState.js'


export default function user(state=initialState.user, action) {
    switch(action.type) {
        case SET_USER: return state = action.value
        default: return state;
    }
}

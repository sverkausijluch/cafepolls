import ADD_POLL from '../actions/addpoll.js'
import SET_POLLS from '../actions/setpolls.js'
import ADD_POLLS from '../actions/addpolls.js'
import initialState from '../initialState.js'


export default function polls(state=initialState.polls, action) {
    switch(action.type) {
        case ADD_POLL: return [...state,action.value]
        case SET_POLLS: return state = action.value
        case ADD_POLLS: return state = state.concat(action.value)
        default: return state;
    }
}

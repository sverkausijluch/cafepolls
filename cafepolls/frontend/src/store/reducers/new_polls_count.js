import SET_NEW_POLLS_COUNT from '../actions/setnewpollscount.js'
import initialState from '../initialState.js'


export default function new_polls_count(state=initialState.new_polls_count, action) {
    switch(action.type) {
        case SET_NEW_POLLS_COUNT: return state = action.value
        default: return state;
    }
}

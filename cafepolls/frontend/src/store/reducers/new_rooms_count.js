import SET_NEW_ROOMS_COUNT from '../actions/setnewroomscount.js'
import initialState from '../initialState.js'


export default function new_rooms_count(state=initialState.new_rooms_count, action) {
    switch(action.type) {
        case SET_NEW_ROOMS_COUNT: return state = action.value
        default: return state;
    }
}

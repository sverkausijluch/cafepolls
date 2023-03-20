import SET_ROOM_SAVED from '../actions/setroomsaved.js'
import initialState from '../initialState.js'


export default function room_saved(state=initialState.room_saved, action) {
    switch(action.type) {
        case SET_ROOM_SAVED: return state = action.value
        default: return state;
    }
}

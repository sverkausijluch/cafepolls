import SET_ROOM_SECTION from '../actions/setroomsection.js'
import initialState from '../initialState.js'


export default function room_section(state=initialState.room_section, action) {
    switch(action.type) {
        case SET_ROOM_SECTION: return state = action.value
        default: return state
    }
}

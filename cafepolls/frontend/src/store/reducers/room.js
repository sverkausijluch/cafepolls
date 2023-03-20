import SET_ACTIVE_ROOM from '../actions/setactiveroom.js'
import initialState from '../initialState.js'


export default function rooms(state=initialState.room, action) {
    switch(action.type) {
        case SET_ACTIVE_ROOM: return state = action.value
        default: return state
    }
}

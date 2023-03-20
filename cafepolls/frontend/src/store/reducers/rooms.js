import SET_ROOM from '../actions/setroom.js'
import SET_ROOMS from "../actions/setrooms"
import initialState from '../initialState.js'


export default function rooms(state=initialState.rooms, action) {
    switch(action.type) {
        case SET_ROOM: return [...state,action.value];
        case SET_ROOMS: return state = action.value
        default: return state;
    }
}

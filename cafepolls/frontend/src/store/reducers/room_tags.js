import SET_ROOM_TAG from '../actions/setroomtag'
import SET_ROOM_TAGS from "../actions/setroomtags"
import initialState from '../initialState.js'


export default function room_tags(state=initialState.room_tags, action) {
    switch(action.type) {
        case SET_ROOM_TAG: return [...state,action.value]
        case SET_ROOM_TAGS: return state = action.value
        default: return state;
    }
}

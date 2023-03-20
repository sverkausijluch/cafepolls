import SET_TAG from '../actions/settag.js'
import initialState from '../initialState.js'
import SET_TAGS from "../actions/settags";


export default function window(state=initialState.tags, action) {
    switch(action.type) {
        case SET_TAG: return [...state,action.value];
        case SET_TAGS: return state = action.value
        default: return state;
    }
}

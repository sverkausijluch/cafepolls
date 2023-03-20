import initialState from '../initialState.js'
import SET_ROOMS_FORM_TAGS from "../actions/setroomsformtags"
import SET_ROOMS_FORM_TAG from "../actions/setroomsformtag"


export default function rooms_form_tags(state=initialState.rooms_form_tags, action) {
    switch(action.type) {
        case SET_ROOMS_FORM_TAG: return [...state,action.value]
        case SET_ROOMS_FORM_TAGS: return state = action.value
        default: return state;
    }
}

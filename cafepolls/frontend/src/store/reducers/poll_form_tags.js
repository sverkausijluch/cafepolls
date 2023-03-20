import SET_POLL_FORM_TAG from '../actions/setpollformtag.js'
import initialState from '../initialState.js'


export default function poll_form_tags(state=initialState.poll_form_tags, action) {
    switch(action.type) {
        case SET_POLL_FORM_TAG: return [...state,action.value]
        default: return state;
    }
}

import SET_COMMENT from '../actions/setcomment.js'
import SET_COMMENTS from '../actions/setcomments.js'
import initialState from '../initialState.js'


export default function comments(state=initialState.comments, action) {
    switch(action.type) {
        case SET_COMMENT: return [...state,action.value]
        case SET_COMMENTS: return state = action.value
        default: return state;
    }
}

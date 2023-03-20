import SET_COMMENTS_BLOCK from '../actions/setcommentsblock.js'
import initialState from '../initialState.js'


export default function comments(state=initialState.comments_block, action) {
    switch(action.type) {
        case SET_COMMENTS_BLOCK: return state = action.value
        default: return state;
    }
}

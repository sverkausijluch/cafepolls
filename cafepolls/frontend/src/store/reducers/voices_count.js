import SET_VOICES_COUNT from '../actions/setvoicescount.js'
import initialState from '../initialState.js'


export default function voices_count(state=initialState.voices_count, action) {
    switch(action.type) {
        case SET_VOICES_COUNT: return state = action.value
        default: return state;
    }
}

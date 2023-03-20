import SET_VOICES_COUNT from '../actions/setvoicescount.js'

function set_voices_count(value) {
    return {
        type: SET_VOICES_COUNT,
        value: value
    }
}

export default set_voices_count
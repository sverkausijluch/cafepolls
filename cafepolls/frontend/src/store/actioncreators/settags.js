import SET_TAGS from '../actions/settags.js'

function set_tags(value) {
    return {
        type: SET_TAGS,
        value: value
    }
}

export default set_tags
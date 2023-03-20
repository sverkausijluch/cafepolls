import SET_TAG from '../actions/settag.js'

function set_tag(value) {
    return {
        type: SET_TAG,
        value: value
    }
}

export default set_tag
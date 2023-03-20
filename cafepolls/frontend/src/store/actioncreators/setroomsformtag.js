import SET_ROOMS_FORM_TAG from '../actions/setroomsformtag.js'

function set_rooms_form_tag(value) {
    return {
        type: SET_ROOMS_FORM_TAG,
        value: value
    }
}

export default set_rooms_form_tag
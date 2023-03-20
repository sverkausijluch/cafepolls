import SET_ROOMS_FORM_TAGS from '../actions/setroomsformtags.js'

function set_rooms_form_tags(value) {
    return {
        type: SET_ROOMS_FORM_TAGS,
        value: value
    }
}

export default set_rooms_form_tags
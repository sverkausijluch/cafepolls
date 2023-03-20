import SET_POLL_FORM_TAG from "../actions/setpollformtag.js";

function set_poll_form_tag(value) {
    return {
        type: SET_POLL_FORM_TAG,
        value: value
    }
}

export default set_poll_form_tag
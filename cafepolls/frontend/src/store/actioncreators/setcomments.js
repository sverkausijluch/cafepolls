import SET_COMMENTS from '../actions/setcomments.js'

function set_comments(value) {
    return {
        type: SET_COMMENTS,
        value: value
    }
}

export default set_comments
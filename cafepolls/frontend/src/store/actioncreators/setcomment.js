import SET_COMMENT from '../actions/setcomment.js'

function set_comment(value) {
    return {
        type: SET_COMMENT,
        value: value
    }
}

export default set_comment
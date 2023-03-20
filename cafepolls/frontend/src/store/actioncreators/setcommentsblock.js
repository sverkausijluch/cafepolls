import SET_COMMENTS_BLOCK from '../actions/setcommentsblock.js'

function set_comments_block(value) {
    return {
        type: SET_COMMENTS_BLOCK,
        value: value
    }
}

export default set_comments_block
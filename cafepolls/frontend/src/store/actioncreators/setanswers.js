import SET_ANSWERS from '../actions/setanswers.js'

function set_answers(value) {
    return {
        type: SET_ANSWERS,
        value: value
    }
}

export default set_answers
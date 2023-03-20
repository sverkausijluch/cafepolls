import ADD_POLLS from '../actions/addpolls.js'

function add_polls(value) {
    return {
        type: ADD_POLLS,
        value: value
    }
}

export default add_polls
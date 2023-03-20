import ADD_POLL from '../actions/addpoll.js'

function add_poll(value) {
    return { 
        type: ADD_POLL,
        value: value
    }
}

export default add_poll
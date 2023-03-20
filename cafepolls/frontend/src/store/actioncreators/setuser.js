import SET_USER from '../actions/setuser.js'

function set_user(value) {
    return {
        type: SET_USER,
        value: value
    }
}

export default set_user
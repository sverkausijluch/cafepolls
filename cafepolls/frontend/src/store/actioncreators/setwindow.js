import SET_WINDOW from '../actions/setwindow.js'

function set_window(value) {
    return {
        type: SET_WINDOW,
        value: value
    }
}

export default set_window
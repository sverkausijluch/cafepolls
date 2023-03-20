import SET_NOTIFICATIONS from '../actions/setnotifications.js'

function set_notifications(value) {
    return {
        type: SET_NOTIFICATIONS,
        value: value
    }
}

export default set_notifications
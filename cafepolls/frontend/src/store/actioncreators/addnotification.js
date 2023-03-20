import ADD_NOTIFICATION from '../actions/addnotification.js'

function add_notification(value) {
    return {
        type: ADD_NOTIFICATION,
        value: value
    }
}

export default add_notification
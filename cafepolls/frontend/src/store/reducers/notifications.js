import SET_NOTIFICATIONS from '../actions/setnotifications.js'
import ADD_NOTIFICATION from '../actions/addnotification.js'
import initialState from '../initialState.js'


export default function notifications(state=initialState.notifications, action) {
    switch(action.type) {
        case SET_NOTIFICATIONS: return state = action.value
        case ADD_NOTIFICATION: return [...state,action.value]
        default: return state
    }
}

import SET_VOICE from '../actions/setvoice.js'
import SET_VOICES from "../actions/setvoices"
import initialState from '../initialState.js'


export default function voices(state=initialState.voices, action) {
    switch(action.type) {
        case SET_VOICE: return [...state, action.value]
        case SET_VOICES: return state = action.value
        default: return state
    }
}

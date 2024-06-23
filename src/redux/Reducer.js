import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./ActionType"

const initialstate = {
    loading: false,
    data: [],
    error: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }
        case FETCH_USER_FAILURE: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default:
            return state
    }
} 
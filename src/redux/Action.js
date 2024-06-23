import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./ActionType"

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

const fetchUserFailure = (err) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: err
    }
}

export const fetchUserList = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            let list = res.data
            dispatch(fetchUserSuccess(list))
        }).catch(err => {
            dispatch(fetchUserFailure(err.message))
        })
    }
}
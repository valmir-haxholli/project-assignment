import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userAdded = () => ({
    type: types.ADD_USER,
})

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_USERS}`)
            .then((resp) => {
                dispatch(getUsers(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const addUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_USERS}`, user)
            .then((resp) => {
                dispatch(userAdded());
                dispatch(loadUsers());
            })
            .catch(error => console.log(error));
    }
}
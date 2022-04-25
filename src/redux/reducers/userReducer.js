import * as types from "../actions/actionType";

const initialState = {
    users: [],
    loading: true
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.ADD_USER: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}

export default usersReducer;
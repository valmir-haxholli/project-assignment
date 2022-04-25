import * as types from "../actions/actionType";

const initialState = {
    projects: [],
    project: {},
    loading: true
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }
        case types.GET_SINGLE_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            }
        case types.ADD_PROJECT:
            return {
                ...state,
                loading: false
            }
        case types.UPDATE_PROJECT:
            return {
                ...state,
                loading: false
            }
        case types.DELETE_PROJECT:
        default:
            return state;
    }
}

export default projectsReducer;
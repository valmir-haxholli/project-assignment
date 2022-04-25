import * as types from "../actions/actionTypes";

const initialState = {
    projects: [],
    project: {},
    loading: true
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default projectsReducer;
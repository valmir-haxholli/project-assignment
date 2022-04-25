import * as types from "./actionType";

const getProjects = (projects) => ({
    type: types.GET_PROJECTS,
    payload: projects
})
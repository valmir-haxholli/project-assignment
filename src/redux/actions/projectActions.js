import * as types from "./actionType";
import axios from "axios";

const getProjects = (projects) => ({
    type: types.GET_PROJECTS,
    payload: projects
})

const projectDeleted = () => ({
    type: types.DELETE_PROJECT
})

const projectAdded = () => ({
    type: types.ADD_PROJECT
})

const projectUpdated = () => ({
    type: types.UPDATE_PROJECT
})

const getProject = (project) => ({
    type: types.GET_SINGLE_PROJECT,
    payload: project
})

export const loadProjects = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                dispatch(getProjects(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const deleteProjects = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                dispatch(projectDeleted());
                dispatch(loadProjects());
            })
            .catch(error => console.log(error));
    }
}

export const addProject = (project) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, project)
            .then((resp) => {
                dispatch(projectAdded());
                dispatch(loadProjects());
            })
            .catch(error => console.log(error));
    }
}

export const getSingleProject = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                dispatch(getProject(resp.data));
            })
            .catch(error => console.log(error));
    }
}

export const updateProject = (project, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, project)
            .then((resp) => {
                dispatch(projectUpdated());
                dispatch(loadProjects())
            })
            .catch(error => console.log(error));
    }
}
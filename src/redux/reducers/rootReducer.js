import { combineReducers } from "redux";

import projectsReducer from "./projectReducer";

const rootReducer = combineReducers({
    data: projectsReducer
})

export default rootReducer;
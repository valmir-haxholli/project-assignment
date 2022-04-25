import { combineReducers } from "redux";

import projectsReducer from "./projectReducer";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
    data: projectsReducer,
    user: usersReducer
})

export default rootReducer;
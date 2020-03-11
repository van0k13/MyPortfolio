import { combineReducers, createStore } from "redux";
import skillsReducer from "./skillsReducer";
import worksReducer from "./worksReducer";



const reducerPack = combineReducers({
    skills: skillsReducer,
    projects: worksReducer
});

const store = createStore(reducerPack);


export default store
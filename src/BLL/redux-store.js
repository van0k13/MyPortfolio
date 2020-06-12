import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import skillsReducer from "./skillsReducer";
import worksReducer from "./worksReducer";
import contactsReducer from "./contactsReducer";
import navMenuReducer from "./navMenu";



const reducersPack = combineReducers({
    skills: skillsReducer,
    projects: worksReducer,
    contacts: contactsReducer,
    navMenu: navMenuReducer
});

const store = createStore(reducersPack, applyMiddleware(thunkMiddleware));


export default store
import portfolio from '../assets/img/imagesProjectsBlock/portfolio.png';
import SocialPage from '../assets/img/imagesProjectsBlock/socials.png';
import todolist from '../assets/img/imagesProjectsBlock/todolist.jpg';
import countingMachine from '../assets/img/imagesProjectsBlock/numerals2.jpg';

const initialState = {
    elements: [
        {
            id: 1,
            toGo: "main",
            name: "Main"
        },
        {
            id: 2,
            toGo: "skills",
            name: "Skills"
        },
        {
            id: 3,
            toGo: "projects",
            name: "Projects"
        },
        {
            id: 4,
            toGo: "contacts",
            name: "Contacts"
        },
    ]
}
const navMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navMenuReducer;
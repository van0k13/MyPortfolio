import portfolio from '../assets/img/imagesProjectsBlock/portfolio.png';
import SocialPage from '../assets/img/imagesProjectsBlock/socials.png';
import todolist from '../assets/img/imagesProjectsBlock/todolist.jpg';
import countingMachine from '../assets/img/imagesProjectsBlock/numerals2.jpg';

const initialState =  [
    { id: 1, img: portfolio, name: 'portfolio', site: 'https://github.com/van0k13/MyPortfolio' },
    { id: 2, img: SocialPage, name: 'social page', site: 'https://github.com/van0k13/SocialNetwork' },
    { id: 3, img: todolist, name: 'to do List', site: 'https://github.com/van0k13/MyProjects' },
    { id: 4, img: countingMachine, name: 'counter', site: 'https://github.com/van0k13/CountingMachine' }
]

const worksReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default worksReducer;
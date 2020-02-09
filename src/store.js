import react from './Skills/Main/images/react.png';
import redux from './Skills/Main/images/redux.png';
import html from './Skills/Main/images/html.jpg';
import css from './Skills/Main/images/css.png';
import js from './Skills/Main/images/js.png';
import jsx from './Skills/Main/images/jsx.png';
import nodejs from './Skills/Main/images/nodejs.svg';
import portfolio from './Works/Body/images/portfolio.png';
import SocialPage from './Works/Body/images/socials.png';
import todolist from './Works/Body/images/todolist.jpg';
import countingMachine from './Works/Body/images/numerals.jpg';



const store = {
    state: {
        skills: [
            {
                id: 1, name: 'React',
                img: react,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 1, name: 'Redux',
                img: redux,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'HTML',
                img: html,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'CSS',
                img: css,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'JS',
                img: js,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'JSX',
                img: jsx,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 3, name: 'NodeJS',
                img: nodejs,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            }
        ],
        projects: [
            { id: 1, img: portfolio, name: 'portfolio' },
            { id: 2, img: SocialPage, name: 'social page' },
            { id: 3, img: todolist, name: 'to do List' },
            { id: 4, img: countingMachine, name: 'counter' }
        ]
    }
}

export default store;
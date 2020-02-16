import react from './img/imagesSkillsBlock/react.png';
import redux from './img/imagesSkillsBlock/redux.png';
import html from './img/imagesSkillsBlock/html.jpg';
import css from './img/imagesSkillsBlock/css.png';
import js from './img/imagesSkillsBlock/js.png';
import jsx from './img/imagesSkillsBlock/jsx.png';
import nodejs from './img/imagesSkillsBlock/nodejs.svg';
import portfolio from './img/imagesProjectsBlock/portfolio.png';
import SocialPage from './img/imagesProjectsBlock/socials.png';
import todolist from './img/imagesProjectsBlock/todolist.jpg';
import countingMachine from './img/imagesProjectsBlock/numerals2.jpg';



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
            { id: 1, img: portfolio, name: 'portfolio', site: 'https://github.com/van0k13/MyPortfolio' },
            { id: 2, img: SocialPage, name: 'social page', site: 'https://github.com/van0k13/SocialNetwork' },
            { id: 3, img: todolist, name: 'to do List', site: 'https://github.com/van0k13/MyProjects' },
            { id: 4, img: countingMachine, name: 'counter', site: 'https://github.com/van0k13/CountingMachine' }
        ]
    }
}

export default store;
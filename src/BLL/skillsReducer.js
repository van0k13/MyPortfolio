import react from '../assets/img/imagesSkillsBlock/react.png';
import redux from '../assets/img/imagesSkillsBlock/redux.png';
import html from '../assets/img/imagesSkillsBlock/html.jpg';
import css from '../assets/img/imagesSkillsBlock/css.png';
import js from '../assets/img/imagesSkillsBlock/js.png';
import jsx from '../assets/img/imagesSkillsBlock/jsx.png';
import nodejs from '../assets/img/imagesSkillsBlock/nodejs.svg';

const initialState =  [
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
]

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default skillsReducer;
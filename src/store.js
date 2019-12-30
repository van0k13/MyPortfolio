import react from './Skills/Main/images/speed.png';
import html from './Skills/Main/images/guitarability.png';
import js from './Skills/Main/images/strength.png';
import portfolio from './Works/Body/images/portfolio.jpeg';
import SocialPage from './Works/Body/images/SocialPage.jpg';
import todolist from './Works/Body/images/todolist.png';
import countingMachine from './Works/Body/images/countingMachine.jpg';



const store = {
    state: {
        skills: [
            {
                id: 1, name: 'React/Redux',
                img: react,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 1, name: 'React/Redux',
                img: react,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 1, name: 'React/Redux',
                img: react,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'HTML/CSS',
                img: html,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'HTML/CSS',
                img: html,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'HTML/CSS',
                img: html,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 2, name: 'HTML/CSS',
                img: html,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            },
            {
                id: 3, name: 'JS',
                img: js,
                description: 'vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim'
            }
        ],
        projects: [
            { id: 1, img: portfolio, name: 'portfolio', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 2, img: SocialPage, name: 'social page', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 2, img: SocialPage, name: 'social page', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 2, img: SocialPage, name: 'social page', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 2, img: SocialPage, name: 'social page', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 3, img: todolist, name: 'todo-List', description: 'skill description and skill description and skill description and skill description', link: 'fd' },
            { id: 4, img: countingMachine, name: 'counting-machine', description: 'skill description and skill description and skill description and skill description', link: 'fd' }
        ]
    }
}

export default store;
import React from 'react';
import './App.css';
import Header from './UI/Header/Header';
import Main from './UI/Main/Main';
import Skills from './UI/Skills/Skills';
import Works from './UI/Works/Works';
import Slogan from './UI/Slogan/Slogan';
import Contacts from './UI/Contacts/Contacts';
import Footer from './UI/Footer/Footer';
import Particles from 'react-particles-js';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './BLL/redux-store';




const App = (props) => {
  const ParticlesOpt = {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 900
        }
      }
    }
  }
  return (
    <div className="App">
      <Particles className="patricles" params={ParticlesOpt} />
      <Header />
      <Main />
      <Skills skills={props.skills} />
      <Works projects={props.projects} />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
  );
}

const mstp = (state) => ({
  skills: state.skills,
  projects: state.projects
})
const AppContainer = connect(mstp)(App)
const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider >
  </BrowserRouter>
};

export default MainApp;

import React from 'react';
import './App.css';
import Header from './UI/Header/Header';
import Main from './UI/Main/Main';
import Skills from './UI/Skills/Skills';
import Works from './UI/Works/Works';
import Slogan from './UI/Slogan/Slogan';
import ContactsContainer from './UI/Contacts/ContactsContainer';
import Footer from './UI/Footer/Footer';
import Particles from 'react-particles-js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './BLL/redux-store';




const App = () => {
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
      <Skills />
      <Works />
      <Slogan />
      <ContactsContainer />
      <Footer />
    </div>
  );
}

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider >
  </BrowserRouter>
};

export default MainApp;

import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Slogan from './Slogan/Slogan';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Particles from 'react-particles-js';




function App(props) {
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
      <Skills skills={props.store.state.skills} />
      <Works projects={props.store.state.projects} />
      <Slogan />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

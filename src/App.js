import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Skills from './Skills/Skills';
import Works from './Works/Works';
import Slogan from './Slogan/Slogan';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';




function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="portfolio">
        <Header />
        <Main />
        <Skills skills={props.store.state.skills}/>
        <Works projects={props.store.state.projects}/>
        <Slogan />
        <Contacts />
        <Footer />
      </div>
    </div>
    </BrowserRouter>
      );
    }
    
    export default App;

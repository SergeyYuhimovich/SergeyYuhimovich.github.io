import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import Intro from './scenes/0_Intro';
import About from './scenes/1_About';
import Skills from './scenes/2_Skills';
import Experience from './scenes/3_Experience';
import Contacts from './scenes/4_Contacts';
import Footer from './scenes/5_Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <Intro />
          <About />
          <Skills />
          <Experience />
          <Contacts />
          <Footer />
      </div>
    );
  }
}

export default App;

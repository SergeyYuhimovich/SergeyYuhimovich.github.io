import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import Intro from './sections/0_Intro';
import About from './sections/1_About';
import SkillsAndTools from './sections/2_SkillsAndTools';
import Experience from './sections/3_Experience';
import Contacts from './sections/4_Contacts';
import Footer from './sections/5_Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Menu />
          <Intro />
          <About />
          <SkillsAndTools />
          <Experience />
          <Contacts />
          <Footer />
      </div>
    );
  }
}

export default App;

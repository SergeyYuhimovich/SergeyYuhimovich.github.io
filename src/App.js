import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import Waypoint from 'react-waypoint'
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
        const { reducers: { currentSection }, onWaypointEvent } = this.props;
        return (
            <div className="app">
                <Waypoint onEnter={() => onWaypointEvent('top')} />

                <Menu />

                <Intro />

                <Waypoint onEnter={() => onWaypointEvent('intro')} />

                <About />

                <Waypoint onEnter={() => onWaypointEvent('about')} />

                <SkillsAndTools />

                <Waypoint onEnter={() => onWaypointEvent('skillsAndTools')} />

                <Experience />

                <Waypoint onEnter={() => onWaypointEvent('Experience')} />

                <Contacts />

                <Waypoint onEnter={() => onWaypointEvent('Contacts')} />

                <Footer />
            </div>
        );
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(App);

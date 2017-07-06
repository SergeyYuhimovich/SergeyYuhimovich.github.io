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
                <Waypoint onEnter={() => onWaypointEvent('top')}
                          onLeave={() => onWaypointEvent('intro')}
                />

                <Menu currentSection={currentSection} />

                <Intro />

                <Waypoint scrollableAncestor={window} onEnter={() => onWaypointEvent('intro')} topOffset={'50%'} />

                <About />

                <Waypoint scrollableAncestor={window} onEnter={() => onWaypointEvent('about')} topOffset={'50%'} />

                <SkillsAndTools />

                <Waypoint scrollableAncestor={window} onEnter={() => onWaypointEvent('skillsAndTools')} topOffset={'50%'} />

                <Experience />

                <Waypoint scrollableAncestor={window} onEnter={() => onWaypointEvent('experience')} topOffset={'50%'} />

                <Contacts />

                <Waypoint onEnter={() => onWaypointEvent('contacts')} />

                <Footer />
            </div>
        );
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(App);

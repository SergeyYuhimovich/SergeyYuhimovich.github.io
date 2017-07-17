import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import Waypoint from 'react-waypoint'
import './App.css';

import Menu from './components/Menu';
import Intro from './sections/0_Intro';
import AboutMe from './sections/1_AboutMe';
import SkillsAndTools from './sections/2_SkillsAndTools';
import Experience from './sections/3_Experience';
import Contacts from './sections/4_Contacts';
import Footer from './sections/5_Footer';

class App extends Component {

    render() {
        const { reducers: { currentSection, aboutMe }, onWaypointEvent } = this.props;

        return (
            <div className="app">
                <Menu currentSection={currentSection} />

                <Waypoint scrollableAncestor={window}
                          onEnter={() => onWaypointEvent('top')}
                />

                <Intro />

                <Waypoint scrollableAncestor={window}
                          onLeave={() => onWaypointEvent('intro')}
                          topOffset={'99%'}
                />

                <AboutMe aboutMe={aboutMe}/>

                <Waypoint scrollableAncestor={window}
                          onEnter={() => onWaypointEvent('about')}
                          topOffset={'50%'}
                />

                <SkillsAndTools />

                <Waypoint scrollableAncestor={window}
                          onEnter={() => onWaypointEvent('skillsAndTools')}
                          topOffset={'50%'}
                          Offset={'50%'}
                />

                <Experience />

                <Waypoint scrollableAncestor={window}
                          onEnter={() => onWaypointEvent('experience')}
                          topOffset={'50%'}
                />

                <Contacts />

                <Waypoint onEnter={() => onWaypointEvent('contacts')} />

                <Footer />
            </div>
        );
    }
}

export default connect( ( {reducers} ) => ( {reducers} ), actions )(App);

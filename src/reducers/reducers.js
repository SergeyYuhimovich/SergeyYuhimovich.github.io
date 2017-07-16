import * as types from '../actions/actionTypes';
import * as data from '../data';

import _ from 'lodash';

export const initialState = {
    menuIsOpen: false,
    aboutMe: data.aboutMeData,
    skills: data.skillsData,
    tools: data.toolsData,
    projects: data.projectsData,
    selectedProject: null,
    socials: data.socialsData,
    currentSection: ''
};

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.ON_WAYPOINT_EVENT:
            return {...state, currentSection: action.section, menuIsOpen: false};

        case types.ON_MENU_TOGGLE:
            console.log(state.menuIsOpen);
            return {...state, menuIsOpen: !state.menuIsOpen};

        case types.ON_OPEN_PROJECT_DETAILS:
            return {...state, selectedProject: _.find(state.projects, { id: action.projectId })};

        case types.ON_CLOSE_PROJECT_DETAILS:
            return {...state, selectedProject: initialState.selectedProject};

        default:
            return state;
    }
}

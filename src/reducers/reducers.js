import * as types from '../actions/actionTypes';
import * as data from '../data';

import _ from 'lodash';

export const initialState = {
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
            // console.log(action.section);
            return {...state, currentSection: action.section};

        case types.ON_OPEN_PROJECT_DETAILS:
            // console.log(action.projectId);
            return {...state, selectedProject: _.find(state.projects, { id: action.projectId })};

        case types.ON_CLOSE_PROJECT_DETAILS:
            // console.log(action.projectId);
            return {...state, selectedProject: initialState.selectedProject};

        default:
            return state;
    }
}

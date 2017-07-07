import * as types from '../actions/actionTypes';

import * as data from '../data';

export const initialState = {
    aboutMe: data.aboutMeData,
    skills: data.skillsData,
    projects: data.projectsData,
    socials: data.socialsData,
    currentSection: ''
};

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.ON_WAYPOINT_EVENT:
            console.log(action.section);
            return {...state, currentSection: action.section};

        default:
            return state;
    }
}

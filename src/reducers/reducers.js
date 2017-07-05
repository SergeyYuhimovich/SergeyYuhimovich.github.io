import * as types from '../actions/actionTypes';

import * as data from '../data';

export const initialState = {
    skills: data.skillsData,
    projects: data.projectsData,
    socials: data.socialsData
};

export default function reducers(state = initialState, action = {}) {
    switch (action.type) {
        case types.ON_ACTION:
            return {...state};

        default:
            return state;
    }
}

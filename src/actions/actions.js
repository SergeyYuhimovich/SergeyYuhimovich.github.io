import * as types from './actionTypes';

export function onWaypointEvent(section) {
    return {
        type: types.ON_WAYPOINT_EVENT,
        section
    };
}

export function onOpenProjectDetails(projectId) {
    return {
        type: types.ON_OPEN_PROJECT_DETAILS,
        projectId
    };
}

export function onCloseProjectDetails() {
    return {
        type: types.ON_CLOSE_PROJECT_DETAILS
    };
}

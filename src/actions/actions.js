import * as types from './actionTypes';

export function onWaypointEvent(section) {
    return {
        type: types.ON_WAYPOINT_EVENT,
        section
    };
}
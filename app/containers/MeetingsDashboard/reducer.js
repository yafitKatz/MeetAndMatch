/*
 *
 * MeetingsDashboard reducer
 *
 */

import { DEL_MEETING } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const meetingsDashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEL_MEETING:
      alert('deletedMeetingDashboard');
      return state;
    // ==========APPROACH 1:=============
    // const newState = { state }.filter(
    //   meeting => meeting.id !== action.payload,
    // );
    // return { ...newState };
    // ==========APPROACH 2:=============
    // return {
    //   ...state,
    //   meetings: state.meetings.filter(
    //     meeting => meeting.id !== action.payload,
    //   ),
    // };
    // ==========APPROACH 3:=============
    // return { ...state, meetings: state.meetings.splice(action.payload, 1) };
    default:
      return state;
  }
};

export default meetingsDashboardReducer;

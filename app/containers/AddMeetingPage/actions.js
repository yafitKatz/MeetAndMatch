/*
 *
 * AddMeetingPage actions
 *
 */

import { ADD_MEETING } from './constants';

export function addMeeting(meeting) {
  return {
    type: ADD_MEETING,
    payload: meeting,
  };
}

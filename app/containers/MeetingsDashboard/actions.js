/*
 *
 * MeetingsDashboard actions
 *
 */

import { DEL_MEETING } from './constants';

export function delMeeting(meeting) {
  return {
    type: DEL_MEETING,
    payload: meeting,
  };
}

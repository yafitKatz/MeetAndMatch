/*
 *
 * MeetingsDashboard actions
 *
 */

import { DEL_MEETING } from './constants';

export function delMeeting(props) {
  return {
    type: DEL_MEETING,
    payload: props.meeting,
  };
}

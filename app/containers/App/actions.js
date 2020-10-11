/*
 *
 * App actions
 *
 */

import { ADD_MEETING } from './constants';

export function addMeeting(props) {
  return {
    type: ADD_MEETING,
    payload: props.newMeeting,
  };
}

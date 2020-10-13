/*
 *
 * App actions
 *
 */

import {
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
} from './constants';

export function loadMeetings() {
  return {
    type: LOAD_MEETINGS,
  };
}

export function loadMeetingsSuccess(props) {
  return {
    type: LOAD_MEETINGS_SUCCESS,
    payload: props.meetings,
  };
}

export function loadMeetingsError(error) {
  return {
    type: LOAD_MEETINGS_ERROR,
    payload: error,
  };
}

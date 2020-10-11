/*
 *
 * AddMeetingPage reducer
 *
 */
import { ADD_MEETING } from './constants';

export const initialState = [
  {
    address: '',
    date: new Date(),
    firstPrticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
    secondPrticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
  },
];

/* eslint-disable default-case, no-param-reassign */
const addMeetingPageReducer = (state = initialState, action) => {
  if (action.type === ADD_MEETING) {
    // alert(action.payload);
    return [...state, action.payload];
  }
  return state;
};

export default addMeetingPageReducer;

/*
 *
 * AddMeetingPage reducer
 *
 */
import { ADD_MEETING } from './constants';

export const initialState = [
  {
    id: '',
    address: '',
    date: new Date(),
    firstParticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
    secondParticipant: {
      firstName: '',
      lastName: '',
      tel: '',
      email: '',
    },
  },
];

/* eslint-disable default-case, no-param-reassign */
const addMeetingReducer = (state = initialState, action) => {
  if (action.type === ADD_MEETING) {
    return [...state, action.payload];
  }
  return state;
};

export default addMeetingReducer;

/*
 *
 * CalendarPage reducer
 *
 */
import { ADD_MEETINGS_ON_DATE } from './constants';

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
const calendarPageReducer = (state = initialState, action) => {
  if (action.type === ADD_MEETINGS_ON_DATE) {
    return state;
  }
  return state;
};

export default calendarPageReducer;

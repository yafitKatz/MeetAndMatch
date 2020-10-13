import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calendarPage state domain
 */

const selectCalendarPageDomain = state => state.meetings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CalendarPage
 */

const makeSelectMeetingEvent = () =>
  createSelector(
    selectCalendarPageDomain,
    substate =>
      [] &&
      substate.map(meeting => ({
        id: meeting.id,
        title: `${meeting.firstParticipant.firstName} ${meeting.firstParticipant.lastName} - 
        ${meeting.secondParticipant.firstName} ${meeting.secondParticipant.lastName}`,
        start: meeting.date,
      })),
  );

export default makeSelectMeetingEvent;
export { selectCalendarPageDomain };

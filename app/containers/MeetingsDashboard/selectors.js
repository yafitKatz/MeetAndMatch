import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the meetingsDashboard state domain
 */

const selectMeetingsDashboardDomain = state => state.meetings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MeetingsDashboard
 */

const makeSelectMeetingCard = () =>
  createSelector(
    selectMeetingsDashboardDomain,
    substate =>
      [] &&
      substate.map(meeting => ({
        id: meeting.id,
        firstParticipant: `${meeting.firstParticipant.firstName} 
        ${meeting.firstParticipant.lastName}`,
        secondParticipant: `${meeting.secondParticipant.firstName} 
        ${meeting.secondParticipant.lastName}`,
        date: meeting.date,
        address: meeting.address,
      })),
  );

export default makeSelectMeetingCard;
export { selectMeetingsDashboardDomain };

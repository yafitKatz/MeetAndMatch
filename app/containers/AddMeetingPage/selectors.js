import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddMeetingPage
 */

const selectMeeting = state => state.meetings || initialState;

const makeSelectMeetingCard = () =>
  createSelector(
    selectMeeting,
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

export { selectMeeting, makeSelectMeetingCard };
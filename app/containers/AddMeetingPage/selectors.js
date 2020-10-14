import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddMeetingPage
 */

const selectGlobal = state => state.global || initialState;

const makeSelectMeetingCard = () =>
  createSelector(
    selectGlobal,
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

export { makeSelectMeetingCard };

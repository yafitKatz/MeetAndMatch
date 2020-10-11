// import React from 'react';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectMeeting = state => state.meeting || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectMeetingEvent = () =>
  createSelector(
    selectMeeting,
    substate =>
      [] &&
      substate.map(meeting => ({
        id: meeting.id,
        title: `${meeting.firstParticipant.firstName}
         ${meeting.firstParticipant.lastName} - 
          ${meeting.secondParticipant.firstName}
          ${meeting.secondParticipant.lastName}`,
        start: meeting.date,
      })),
  );

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

export { selectMeeting, makeSelectMeetingEvent };
export { makeSelectMeetingCard };

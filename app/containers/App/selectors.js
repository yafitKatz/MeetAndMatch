// import React from 'react';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectGlobal = state => state.global || initialState;

/**
 * Other specific selectors
 */

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

const makeSelectMeetingEvent = () =>
  createSelector(
    selectGlobal,
    substate =>
      [] &&
      substate.map(meeting => ({
        id: meeting.id,
        title: `${meeting.firstParticipant.firstName} ${meeting.firstParticipant.lastName} - 
      ${meeting.secondParticipant.firstName} ${meeting.secondParticipant.lastName}`,
        start: meeting.date,
      })),
  );

/**
 * Default selector used by App
 */

const makeDefaultSelect = () =>
  createSelector(
    selectGlobal,
    substate => substate,
  );

export default makeDefaultSelect;

export { makeSelectMeetingCard, makeSelectMeetingEvent };

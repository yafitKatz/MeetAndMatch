// import React from 'react';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectMeeting = state => state.meetings || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeDefaultSelect = () =>
  createSelector(
    selectMeeting,
    substate => substate,
  );

export { makeDefaultSelect };

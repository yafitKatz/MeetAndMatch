import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addMeetingPage state domain
 */

const selectAddMeetingPageDomain = state =>
  state.addMeetingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddMeetingPage
 */

const makeSelectAddMeetingPage = () =>
  createSelector(
    selectAddMeetingPageDomain,
    substate => substate,
  );

export default makeSelectAddMeetingPage;
export { selectAddMeetingPageDomain };

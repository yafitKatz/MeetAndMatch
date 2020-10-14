import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the meetingsDashboard state domain
 */

const selectMeetingsDashboardDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MeetingsDashboard
 */

const makeDefaultSelect = () =>
  createSelector(
    selectMeetingsDashboardDomain,
    substate => substate );

export default makeDefaultSelect;
export { selectMeetingsDashboardDomain };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calendarPage state domain
 */

const selectCalendarPageDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CalendarPage
 */

const makeDefaultSelect = () =>
  createSelector(
    selectCalendarPageDomain,
    substate => substate,
  );

export default makeDefaultSelect;
export { selectCalendarPageDomain };

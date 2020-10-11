import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calendarPage state domain
 */

const selectCalendarPageDomain = state => state.calendarPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CalendarPage
 */

const makeSelectCalendarPage = () =>
  createSelector(
    selectCalendarPageDomain,
    substate => substate,
  );

export default makeSelectCalendarPage;
export { selectCalendarPageDomain };

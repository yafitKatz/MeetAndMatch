/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Header';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CalendarPage container!',
  },
  homePage: {
    id: `${scope}.homePage`,
    path: '/',
    defaultMessage: 'Home Page',
  },
  calendar: {
    id: `${scope}.calendar`,
    path: '/calendar',
    defaultMessage: 'Calendar',
  },
  addMeeting: {
    id: `${scope}.addMeeting`,
    path: '/addMeeting',
    defaultMessage: 'Add Meeting',
  },
  meetingsDashboard: {
    id: `${scope}.meetingsDashboard`,
    path: '/meetingsDashboard',
    defaultMessage: 'Meetings Dashboard',
  },
});

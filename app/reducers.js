/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import loadingReducer from 'containers/App/reducer';
import errorReducer from 'containers/App/reducer';
import addMeetingReducer from './containers/AddMeetingPage/reducer';
import meetingsDashboardReducer from './containers/MeetingsDashboard/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    meetings: addMeetingReducer,
    meetingsDashboardReducer,
    language: languageProviderReducer,
    // isLoading: loadingReducer,
    // error: errorReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}

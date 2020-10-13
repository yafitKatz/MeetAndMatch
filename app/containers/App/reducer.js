/*
 *
 * App reducer
 *
 */

import {
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
} from './constants';

// import mockData from '../../mockData';

export const initialState = {};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOAD_MEETINGS:
      return true;
    case LOAD_MEETINGS_SUCCESS:
      return false;
    case LOAD_MEETINGS_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_MEETINGS_ERROR:
      return action.payload;
    case LOAD_MEETINGS:
    case LOAD_MEETINGS_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default loadingReducer;
export { errorReducer };

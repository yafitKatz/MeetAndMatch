/*
 *
 * App reducer
 *
 */

import {
  ADD_MEETING,
  DEL_MEETING,
  LOAD_MEETINGS,
  LOAD_MEETINGS_SUCCESS,
  LOAD_MEETINGS_ERROR,
} from './constants';

// import mockData from '../../mockData';

export const initialState = [
  {
    id: '5f7b1a59316f8e6d61076240',
    address: '969 Doone Court, Spokane, Connecticut, 7811',
    date: '2020-10-08',
    firstParticipant: {
      firstName: 'Chelsea',
      lastName: 'Gross',
      phone: '+1 (812) 436-2719',
      email: 'chelseagross@moreganic.com',
    },
    secondParticipant: {
      firstName: 'Rebecca',
      lastName: 'Bailey',
      phone: '+1 (909) 555-3203',
      email: 'rebeccabailey@moreganic.com',
    },
  },
  {
    id: '5f7b1a597e8437af8f4557f8',
    address: '850 Conway Street, Nettie, Hawaii, 5018',
    date: '2020-10-04',
    firstParticipant: {
      firstName: 'Mcfadden',
      lastName: 'Castaneda',
      phone: '+1 (857) 465-2802',
      email: 'mcfaddencastaneda@moreganic.com',
    },
    secondParticipant: {
      firstName: 'Leah',
      lastName: 'Mosley',
      phone: '+1 (838) 442-2200',
      email: 'leahmosley@moreganic.com',
    },
  },
  {
    id: '5f7b1a597654944ddd60188b',
    address: '547 Hutchinson Court, Calverton, Iowa, 6516',
    date: '2020-10-29',
    firstParticipant: {
      firstName: 'Melva',
      lastName: 'Rivers',
      phone: '+1 (803) 401-3942',
      email: 'melvarivers@moreganic.com',
    },
    secondParticipant: {
      firstName: 'Anita',
      lastName: 'Caldwell',
      phone: '+1 (828) 576-3770',
      email: 'anitacaldwell@moreganic.com',
    },
  },
  {
    id: '5f7b1a59937ac89a099e1192',
    address: '550 Pleasant Place, Sattley, Northern Mariana Islands, 7274',
    date: '2020-10-08',
    firstParticipant: {
      firstName: 'Regina',
      lastName: 'Guerra',
      phone: '+1 (972) 406-2178',
      email: 'reginaguerra@moreganic.com',
    },
    secondParticipant: {
      firstName: 'Ashlee',
      lastName: 'Hester',
      phone: '+1 (956) 518-2529',
      email: 'ashleehester@moreganic.com',
    },
  },
  {
    id: '5f7b1a597dc8b4c131dd7aa5',
    address: '520 Bennet Court, Hilltop, Alabama, 5930',
    date: '2020-10-08',
    firstParticipant: {
      firstName: 'Adkins',
      lastName: 'Mccoy',
      phone: '+1 (898) 414-3292',
      email: 'adkinsmccoy@moreganic.com',
    },
    secondParticipant: {
      firstName: 'Monica',
      lastName: 'Dalton',
      phone: '+1 (803) 418-2646',
      email: 'monicadalton@moreganic.com',
    },
  },
];

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEETING:
      return [...state, action.payload];
    case DEL_MEETING: {
      // alert('deletedMeetingDashboard');
      // return state;
      // ==========APPROACH 1:=============
      //   const newState = state.filter(
      //     meeting => meeting.id !== action.payload.id,
      //   );
      //   return { ...newState };
      // }
      // ==========APPROACH 2:=============
      // return {
      //   ...state,
      //   meetings: state.meetings.filter(
      //     meeting => meeting.id !== action.payload,
      //   ),
      // };
      // ==========APPROACH 3:=============
      return { ...state, global: global.splice(action.payload, 1) };
    }
    default:
      return state;
  }
}

export default globalReducer;

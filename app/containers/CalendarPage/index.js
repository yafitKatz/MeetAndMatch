/**
 *
 * CalendarPage
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';
// import { store } from '../../configureStore';
// import addMeetingOnDate from './actions';
import {
  Alert,
  OverlayTrigger,
  Popover,
  PopoverContent,
  PopoverTitle,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calendarStyle.scss';
import saga from './saga';
import reducer from './reducer';

export function CalendarPage(props) {
  useInjectReducer({ key: 'calendarPage', reducer });
  useInjectSaga({ key: 'calendarPage', saga });

  // const handleDateClick = arg => {
  //   alert(arg.dateStr);
  // };

  // const events = [
  //   {
  //     id: 0,
  //     title: 'Event1',
  //     start: '2020-10-04',
  //   },
  //   {
  //     id: 1,
  //     title: 'Event2',
  //     start: '2020-10-05',
  //   },
  // ];

  return (
    <div>
      <Helmet>
        <title>CalendarPage</title>
        <meta name="description" content="Description of CalendarPage" />
      </Helmet>
      <center>
        <FullCalendar
          id="calendar"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={props.meetingEvents}
          dayMaxEvents={1}
          eventClick={arg => {
            alert(arg.event.innerText);
            // {
            //   alert ? <Alert variant="light">{arg.event.title}</Alert> : false;
            // }
          }}
        />
      </center>
    </div>
  );
}

CalendarPage.propTypes = {
  meetingEvents: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  // calendarPage: makeSelectCalendarPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CalendarPage);

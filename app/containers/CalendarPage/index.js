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
import makeSelectMeetingEvent from './selectors';
// import {
//   Alert,
//   OverlayTrigger,
//   Popover,
//   PopoverContent,
//   PopoverTitle,
// } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './calendarStyle.scss';
import saga from './saga';
import reducer from './reducer';

export function CalendarPage(props) {
  useInjectReducer({ key: 'calendarPage', reducer });
  useInjectSaga({ key: 'calendarPage', saga });

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
          events={props.events}
          dayMaxEvents={1}
          eventClick={
            arg => {
              alert(arg.event.title.replace('\n', ' ').replace('\t', ' '));
              // {
              //   alert ? <Alert variant="light">{arg.event.title}</Alert> : false;
              // }
            }
            // eventMouseover={(event, jsEvent, view) => {
            //   $('.fc-event-inner', this).append(
            //     `<div id=/"${event.id
            //     }/" class=/"hover-end/">${$.fullCalendar.formatDate(
            //       event.end,
            //       'h:mmt',
            //     )}</div>`,
            //   );
            // }}
            // eventMouseout={(event, jsEvent, view) => {
            //   $(`#${event.id}`).remove();
            // }}
          }
        />
      </center>
    </div>
  );
}

CalendarPage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

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

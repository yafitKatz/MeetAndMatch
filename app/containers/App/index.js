/**
 *
 * App
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'components/HomePage/Loadable';
import AddMeetingPage from 'containers/AddMeetingPage';
import MeetingsDashboard from 'components/MeetingsDashboard';
import CalendarPage from 'containers/CalendarPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import reducer from './reducer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { makeSelectMeetingEvent, makeSelectMeetingCard } from './selectors';
import 'style.scss';

export function App(props) {
  useInjectReducer({ key: 'app', reducer });

  return (
    <div>
      <center>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/addMeeting" component={() => <AddMeetingPage />} />
          <Route
            path="/meetingsDashboard"
            component={() => (
              <MeetingsDashboard meetingCards={props.meetingCard} />
            )}
          />
          <Route
            path="/calendar"
            component={() => (
              <CalendarPage meetingEvents={props.meetingEvent} />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </center>
    </div>
  );
}

App.propTypes = {
  meetingEvent: PropTypes.array,
  meetingCard: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  meetingEvent: makeSelectMeetingEvent(),
  meetingCard: makeSelectMeetingCard(),
});

// onClick=(props.handleChange(meeting))
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
)(App);

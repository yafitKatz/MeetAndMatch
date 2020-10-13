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
import MeetingsDashboard from 'containers/MeetingsDashboard';
import CalendarPage from 'containers/CalendarPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import reducer from './reducer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import 'style.scss';

export function App() {
  useInjectReducer({ key: 'app', reducer });

  return (
    <div>
      <center>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/addMeeting" component={() => <AddMeetingPage />} />
          <Route path="/meetingsDashboard" component={() => <MeetingsDashboard />} />
          <Route path="/calendar" component={() => <CalendarPage />} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </center>
    </div>
  );
}

App.propTypes = {};

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
)(App);

/**
 *
 * MeetingsDashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import messages from './messages';
import MeetingCard from './MeetingCard';
import { delMeeting } from './actions';
import makeSelectMeetingCard from './selectors';

export function MeetingsDashboard(props) {
  useInjectReducer({ key: 'meetingsDashboard', reducer });

  const cardsArr = props.meetings.map(card => (
    <div className="meetingCard">
      <MeetingCard
        key={card.id}
        firstParticipant={card.firstParticipant}
        secondParticipant={card.secondParticipant}
        date={card.date}
        address={card.address}
      />
      <button type="button" onClick={() => props.delMeeting(card)}>
        DELETE
      </button>
    </div>
  ));

  return (
    <div>
      <center>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        {cardsArr}
      </center>
    </div>
  );
}

MeetingsDashboard.propTypes = {
  delMeeting: PropTypes.func,
  // meetingCards: PropTypes.array,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  // meetingCards: makeSelectMeetingCard(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ delMeeting }, dispatch)
  // delMeeting: meeting => dispatch(delMeeting(meeting)),
  //   dispatch,
  // };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MeetingsDashboard);

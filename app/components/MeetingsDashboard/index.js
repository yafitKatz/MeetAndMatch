/**
 *
 * MeetingsDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MeetingCard from './MeetingCard';
import './style.scss';

function MeetingsDashboard(props) {
  const cardsArr = props.meetingCards.map(card => (
    <MeetingCard
      key={card.id}
      firstParticipant={card.firstParticipant}
      secondParticipant={card.secondParticipant}
      date={card.date}
      address={card.address}
    />
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
  meetingCards: PropTypes.array,
};

export default MeetingsDashboard;

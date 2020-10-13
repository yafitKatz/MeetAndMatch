/**
 *
 * MeetingCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function MeetingCard(props) {
  return (
    <div className="meetingCard">
      <center>
        <br />
        <h3>{props.firstParticipant} with</h3>
        <h3>{props.secondParticipant}</h3>
        <h5>
          {props.address}, {props.date}
        </h5>
      </center>
      <hr />
    </div>
  );
}

MeetingCard.propTypes = {
  firstParticipant: PropTypes.string,
  secondParticipant: PropTypes.string,
  address: PropTypes.string,
  date: PropTypes.string,
};

export default MeetingCard;

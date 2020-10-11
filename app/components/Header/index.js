/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import HeaderLink from './HeaderLink';
import Img from './Img';
import messages from './messages';
import Banner from './banner.png';

function Header() {
  // const navArr = [...messages].map(msg => (
  //   <HeaderLink to={msg.path}>
  //     <FormattedMessage {...msg.defaultMessage} />
  //   </HeaderLink>
  // ));
  return (
    <div>
      <center>
        <Img src={Banner} alt="MeetAndMatch - Logo" />
        {/* {navArr} */}
        <nav>
          <HeaderLink to="/">
            <FormattedMessage {...messages.homePage} />
          </HeaderLink>
          <HeaderLink to="/calendar">
            <FormattedMessage {...messages.calendar} />
          </HeaderLink>
          <HeaderLink to="/addMeeting">
            <FormattedMessage {...messages.addMeeting} />
          </HeaderLink>
          <HeaderLink to="/meetingsDashboard">
            <FormattedMessage {...messages.meetingsDashboard} />
          </HeaderLink>
        </nav>
      </center>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);

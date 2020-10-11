/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import 'style.scss';

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import Img from './Img';
import picture from './homeBackground.png';

export default function HomePage() {
  return (
    <div className="homePage">
      <center>
        <img id="background" src={picture} alt="background" />
        {/* <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <h3>
          <FormattedMessage {...messages.slogen} />
        </h3> */}
      </center>
    </div>
  );
}

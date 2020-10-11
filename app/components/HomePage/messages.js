/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'WELCOME TO MEET&MATCH!',
  },
  slogen: {
    id: `${scope}.slogen`,
    defaultMessage: 'The best tool for professional matchmakers',
  },
});

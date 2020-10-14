/**
 *
 * AddMeetingPage
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Form, Col, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { Telephone, Person } from 'react-bootstrap-icons';
import uuid from 'uuid-random';
import Button from '../../components/Button';
import reducer from './reducer';
import saga from './saga';
import { addMeeting } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Link from './Link';

export function AddMeetingPage(props) {
  const [show, setShow] = useState(false);

  useInjectReducer({ key: 'addMeetingPage', reducer });
  useInjectSaga({ key: 'addMeetingPage', saga });

  const DateRef = React.createRef();
  const AddressRef = React.createRef();

  const FirstFnameRef = React.createRef();
  const FirstLnameRef = React.createRef();
  const FirstPhoneRef = React.createRef();
  const FirstEmailRef = React.createRef();

  const SecondFnameRef = React.createRef();
  const SecondLnameRef = React.createRef();
  const SecondPhoneRef = React.createRef();
  const SecondEmailRef = React.createRef();

  const newMeeting = {
    id: '',
    address: '5 Chatam Sofer st. Bnei Brak',
    date: new Date(),
    firstParticipant: {
      firstName: 'Shimshon',
      lastName: 'Meshulam',
      phone: '0542646052',
      email: 'shimesh@gail.com',
    },
    secondParticipant: {
      firstName: 'Shoshana',
      lastName: 'Baruchim',
      phone: '0523833095',
      email: 'shoshb63@gail.com',
    },
  };

  const mapFormToDispatch = () => {
    event.preventDefault();
    newMeeting.id = uuid();
    newMeeting.address = AddressRef.current.value;
    newMeeting.date = DateRef.current.value;
    newMeeting.firstParticipant.firstName = FirstFnameRef.current.value;
    newMeeting.firstParticipant.lastName = FirstLnameRef.current.value;
    newMeeting.firstParticipant.phone = FirstPhoneRef.current.value;
    newMeeting.firstParticipant.email = FirstEmailRef.current.value;
    newMeeting.secondParticipant.firstName = SecondFnameRef.current.value;
    newMeeting.secondParticipant.lastName = SecondLnameRef.current.value;
    newMeeting.secondParticipant.phone = SecondPhoneRef.current.value;
    newMeeting.secondParticipant.email = SecondEmailRef.current.value;
    // mapDispatchToProps(addMeeting({ newMeeting }));
    debugger;
    props.addMeeting(newMeeting);
    setShow(true);
    // ${this}.unbind('onSubmit').submit();
  };

  return (
    <div>
      {show && (
        <Alert variant="light">
          <Alert.Heading>THE MEETING WAS ADDED SUCCESSFULY!</Alert.Heading>
          <Link
            to='/MeetingsDashboard'
            // to={{
            //   pathname: '/MeetingsDashboard',
            //   state: { global: props.meetingCard },
            // }}
            id="alertLink"
          >
            Move to Meetings Dashboard
          </Link>
        </Alert>
      )}
      <Form onSubmit={mapFormToDispatch}>
        <center>
          <h3>First Participant Details:</h3>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert first Name"
                  ref={FirstFnameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert last Name"
                  ref={FirstLnameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Telephone />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert phone number"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  ref={FirstPhoneRef}
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="example@gmail.com"
                  type="email"
                  ref={FirstEmailRef}
                />
              </InputGroup>
            </Col>
          </Form.Row>
          <h3>Second Participant Details</h3>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert first Name"
                  ref={SecondFnameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert last name"
                  ref={SecondLnameRef}
                  required
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <Telephone />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Insert phone number"
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  ref={SecondPhoneRef}
                />
              </InputGroup>
            </Col>
            <Col xs="auto">
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="example@gmail.com"
                  type="email"
                  ref={SecondEmailRef}
                />
              </InputGroup>
            </Col>
          </Form.Row>

          <h3>Meeting Details</h3>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="Insert address"
                ref={AddressRef}
                required
              />
            </Col>
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="2020-12-30"
                type="date"
                ref={DateRef}
                required
              />
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Link to="/">Cancel</Link>
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </center>
      </Form>
    </div>
  );
}

AddMeetingPage.propTypes = {
  addMeeting: PropTypes.func,
  meetingCard: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return { addMeeting: meeting => dispatch(addMeeting(meeting)) };
  // return bindActionCreators({ addMeeting }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddMeetingPage);

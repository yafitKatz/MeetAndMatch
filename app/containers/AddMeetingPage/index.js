/**
 *
 * AddMeetingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Telephone, Person } from 'react-bootstrap-icons';
import Button from './Button';
import makeSelectAddMeetingPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { addMeeting } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Link from './Link';

export function AddMeetingPage(props) {
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
    date: new Date(),
    address: '5 Chatam Sofer st. Bnei Brak',
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

  const CreateGuid = () => {
    function p8() {
      const p = `${Math.random().toString(16)}000000000`.substr(2, 8);
      return p;
    }
    return p8() + p8() + p8();
  };

  const mapFormToDispatch = () => {
    event.preventDefault();
    newMeeting.id = CreateGuid();
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
    props.addMeeting(newMeeting);
    // ${this}.unbind('onSubmit').submit();
  };
  mapDispatchToProps();

  return (
    <div>
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
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Insert first name"
                  ref={FirstFnameRef}
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
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Insert first name"
                  ref={SecondFnameRef}
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
              />
            </Col>
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                placeholder="2020-12-30"
                type="date"
                ref={DateRef}
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
  // eslint-disable-next-line react/no-unused-prop-types
  // FirstFnameRef: PropTypes.string,
  // FirstLnameRef: PropTypes.string,
  // FirstPhoneRef: PropTypes.string,
  // FirstEmailRef: PropTypes.string,
  // SecondFnameRef: PropTypes.string,
  // SecondLnameRef: PropTypes.string,
  // SecondPhoneRef: PropTypes.string,
  // SecondEmailRef: PropTypes.string,
  // AddressRef: PropTypes.string,
  // DateRef: PropTypes.string,
  // newMeeting: PropTypes.object,
  addMeeting: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addMeetingPage: makeSelectAddMeetingPage(),
});
/*
function mapDispatchToProps(dispatch) {
  return {
    addMeeting: newMeeting => dispatch(addMeeting(newMeeting)),
  };
} */

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMeeting }, dispatch);
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddMeetingPage);

import React, { useState } from "react";

import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";



function Otp(props) {

  const countryCode = "+44"
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("")
  const [expandOtpForm, setExpandOtpForm] = useState(false)
  

  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
      console.log(phoneNumber);
  }

  function handleOtpChange(event) {
    setOtp(event.target.value);
      console.log(otp);
  }

  const requestOtp = (event) => {
    event.preventDefault();
    if (phoneNumber.length >= 11) {
      setExpandOtpForm(true)
      props.onRequestOtp(phoneNumber)
    }
  }
  

  return (
    <div className="form-div" >
      <Form noValidate validated={validated} >

        <Row >
          <Col >
            <h3>Plese enter your phone number!</h3>
            <Form.Group>
              <Form.Label hidden>OtpForm</Form.Label>
              <InputGroup.Text id="inputGroupPrepend">{countryCode}</InputGroup.Text>
              <Form.Control
                required
                onChange={handlePhoneNumberChange}
                type="tel"
                id="inlineFormInputName"
                placeholder="phone number"
                name="number"
                value={phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                Please add valid phone number! 
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="outline-secondary" onClick={requestOtp}>SEND</Button>{' '}
          </Col>
        </Row>
        <>
        {expandOtpForm === true ? 
        <> 
        <Row id="recaptcha-container">
          <Col >
            <Form.Group>
              <Form.Label hidden>Content</Form.Label>
              <Form.Control
                required
                as="textarea"
                onChange={handleOtpChange}
                id="inlineFormInputName"
                placeholder="Add code received by text"
                name="content"
                value={otp}
                rows="1"
                maxLength="13"
              />
              <Form.Control.Feedback type="invalid">
                OTP
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>

            <Button variant="outline-secondary">OTP</Button>{' '}
          </Col>
        </Row>
        </>
        :
        null
        }
       
        </>
      </Form>
    </div>
  );
}

export default Otp;

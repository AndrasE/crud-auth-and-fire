import React, { useState } from "react";
import { Button, Col, Form, Row, Alert } from "react-bootstrap"
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router";



function PhoneSignUp(props) {

  const navigate = useNavigate();
  const { setUpRecaptha, displayPhoneSignInUser } = useUserAuth();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState(false);
 

  // not needed bcus of PhoneInput package but leave it here for future ref
  // function handlePhoneNumberChange(event) {
  //   setPhoneNumber(event.target.value);
  //   console.log(phoneNumber);
  // also could go in the same line onChange={(e) => setPhoneNumber(e.target.value)}
  

  function handleOtpChange(event) {
    setOtp(event.target.value);
  }

  const getOtp = async (event) => {
    event.preventDefault();
    console.log(phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(phoneNumber);
      setResult(response);
      setDisplay(true)
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (event) => {
    event.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      displayPhoneSignInUser(phoneNumber)
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  function cancelPhonePopUp() {
    props.onCancel()
  }

  return (
    <div>
      { display === false ?
      <div className="form-div update-div otp-div">
        <Form onSubmit={getOtp} >
          <Row>
            <Col>
              <h5 className="mb-3">Phone authentication</h5>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group className="mb-3">
                <PhoneInput
                  id="inlineFormInputName"
                  defaultCountry="GB"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Enter your phone number!"
                />
                <div id="recaptcha-container"></div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-secondary" type="submit" >
                SUBMIT
              </Button>
              <Button variant="outline-secondary" onClick={cancelPhonePopUp} >CANCEL</Button>
            </Col>
          </Row>
        </Form>
      </div>
        :
        null
        }

        { display === true ?
      <div className="form-div update-div otp-div">
        <Form onSubmit={verifyOtp}>
          <Row>
            <Col>
              <h5 className="mb-3">OTP Code</h5>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  id="inlineFormInputName"
                  onChange={handleOtpChange}              
                  placeholder="Enter the code you received! "
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outline-secondary" type="submit" >
                SUBMIT
              </Button>
              <Button variant="outline-secondary" onClick={cancelPhonePopUp} >CANCEL</Button>
            </Col>
          </Row>
        </Form>
      </div>
      :
        null
        }
    </div>
  );
};

export default PhoneSignUp; 

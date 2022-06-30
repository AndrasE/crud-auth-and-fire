import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import PhoneSignUp from "./PhoneSignUp";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Col, Row, Button } from "react-bootstrap";


const Login = () => {

  const navigate = useNavigate();
  const { googleSignIn, facebookSignIn } = useUserAuth();

  //state render phoneSignin
  const [display, setDisplay] = useState(false)

  //state for readering about page instead of home - login
  const [footerClick, setFooterClick] = useState(false);


  // functions from user auth (phone sign in fuctions are in a PhoneSignUp component)
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleDisplay() {
    setDisplay(true)
    console.log("Login initalized with phone number");
  }

  const cancelDisplay = () => {
    setDisplay(false)
    console.log("Phone sign-in cancelled by user");
  }

  //footer clicked - opens
  function footerOpen() {

    setFooterClick(prevState => {
      setFooterClick(!prevState)
    })
  }


  return (
    <div>

      <Header />

      {/* login option buttons */}
      {/* about page state conditional render */}
      {footerClick === false ?
        <div>
          {/* phonesignin state conditional render */}
          {display === false ?
            <div className="form-div login-div" >
              <Row >
                <Col>
                  <h3>
                    Please login:
                  </h3>
                </Col>
              </Row>
              <hr />
              <br />

              <Row>
                <Col>
                  <Button onClick={handleGoogleSignIn} variant="outline-secondary" >
                    <div className="svg-sizing ">
                      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <g className="fa-group">
                          <path fill="currentColor"
                            d="m488,261.8c0,141.5 -96.9,242.2 -240,242.2c-137.2,0 -248,-110.8 -248,-248s110.8,-248 248,-248c66.8,0 123,24.5 166.3,64.9l-67.5,64.9c-88.3,-85.2 -252.5,-21.2 -252.5,118.2c0,86.5 69.1,156.6 153.7,156.6c98.2,0 135,-70.4 140.8,-106.9l-140.8,0l0,-85.3l236.1,0c2.3,12.7 3.9,24.9 3.9,41.4z"
                            className="fa-primary"></path>
                        </g>
                      </svg>
                    </div>
                    google
                  </Button>{' '}
                </Col>

                <Col>

                  <Button onClick={handleDisplay} variant="outline-secondary" >
                    <div className="svg-sizing ">
                      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <g className="fa-group">
                          <path fill="currentColor"
                            d="m504.04209,472.92899l-46.8826,27.76818c-30.18034,18.64935 -158.79247,39.61365 -333.76554,-150.58206c-168.68184,-183.11268 -120.44797,-284.65773 -97.82214,-308.07515l38.93214,-36.30899c9.17917,-7.02382 23.02807,-6.19765 30.91882,2.28676l102.3913,108.67883l0.06285,0.05639c7.49166,7.96277 7.24655,20.35807 -2.60826,27.82458l0,0.08177l-45.37736,29.36694c-17.96239,15.97911 -2.30344,41.13064 16.05805,65.4278l87.31684,92.50798c40.61965,35.18112 62.87781,51.43374 82.31402,39.80821l37.73485,-37.76958c9.24202,-6.97024 23.02807,-6.11588 30.91882,2.31496l102.45415,108.67883l0,0.05639c7.45395,7.98815 7.17742,20.35807 -2.64596,27.87815z"
                            className="fa-primary"></path>
                        </g>
                      </svg>
                    </div>
                    phone
                  </Button>{' '}

                </Col>

                <Col>
                  <Button className="facebook" onClick={handleFacebookSignIn} variant="outline-secondary" >
                    <div className="svg-sizing ">
                      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <g className="fa-group">
                          <path fill="currentColor"
                            d="m385.14,287l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"
                            className="fa-primary"></path>
                        </g>
                      </svg>
                    </div>
                    fabook
                  </Button>{' '}
                </Col>
              </Row>
              <br />
            </div>
            :
            null
          }

          {display === true ?
            <PhoneSignUp onCancel={cancelDisplay} />
            :
            null
          }
          
        </div>
        :
        <About />
      }
      <Footer onClick={footerOpen} />

    </div>
  );
};

export default Login;

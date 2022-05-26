import React from "react";
import { Col,  Row, Button } from "react-bootstrap";
import Header from "./Header";
// import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {

  const { googleSignIn, facebookSignIn } = useUserAuth();
  const navigate = useNavigate();

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

  return (
    <div>

      <div>
        <Header />
      </div>

      <div className="form-div" >
        <Row >
          <Col>
            <h3>
              Please login:
            </h3>
          </Col>
        </Row>
        <hr/>
        <br/>
   
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
              oogle
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
              acebook
            </Button>{' '}
          </Col>
          </Row>
        <>
        </>
      </div>

    </div>
  );
};

export default Login;

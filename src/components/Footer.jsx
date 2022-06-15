import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
    <Container className="footer-container">
      <h6>Andras ⓒ {year}</h6>
    </Container>
 </div>
  );
}

export default Footer;

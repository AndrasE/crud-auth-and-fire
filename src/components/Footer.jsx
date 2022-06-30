import React from "react";
import { Container } from "react-bootstrap";



function Footer(props) {

function handleClick(e) {
  e.preventDefault();
  props.onClick();
}

  const year = new Date().getFullYear();
  return (
    <div>
    <Container className="footer-container">
      <a style={{textDecoration: "none"}}href="" onClick={handleClick}>Andras 🧡 {year}</a>
  
    </Container>
 </div>
  );
}

export default Footer;

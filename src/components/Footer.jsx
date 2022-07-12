import React from "react";
import { Container } from "react-bootstrap";


function Footer(props) {

function handleClick(e) {
  e.preventDefault();
  props.onClick();
}

const year = new Date().getFullYear();

  return (
    
    <Container className="footer-container">
      <a href="/#" onClick={handleClick}>Andras <span role="img" aria-label="heart">🧡</span>  {year}</a>
    </Container>
 
  );
}

export default Footer;

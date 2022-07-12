import React from "react";
import { Container } from "react-bootstrap";



function Footer(props) {



  const year = new Date().getFullYear();
  return (
    
    <Container className="footer-container">
      <h6>Andras <span role="img" aria-label="heart">🧡</span>  {year}</h6>
    </Container>
 
  );
}

export default Footer;

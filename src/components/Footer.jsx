import React from "react";
import { Container } from "react-bootstrap";


function Footer() {

const year = new Date().getFullYear();

  return (
    
    <Container className="footer-container">
      <a style={{textDecoration: "none"}} href="https://andrasegyed.netlify.app/">Andras <span role="img" aria-label="heart">🧡</span>  {year}</a>
    </Container>
 
  );
}

export default Footer;

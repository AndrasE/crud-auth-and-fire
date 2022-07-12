import React from "react";




function Footer(props) {

function handleClick(e) {
  e.preventDefault();
  props.onClick();
}

  const year = new Date().getFullYear();
  return (
    
    <div className="footer-container">
      <a style={{textDecoration: "none"}} href="/#" onClick={handleClick}>Andras <span role="img" aria-label="heart">🧡</span>  {year}</a>
    </div>
 
  );
}

export default Footer;

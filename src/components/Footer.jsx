import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h6>Andras ⓒ {year}</h6>
    </footer>
  );
}

export default Footer;

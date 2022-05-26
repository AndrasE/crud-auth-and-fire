import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const Header = () => {


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <>
        <Navbar fixed="top" bg="dark" variant="dark" >
          <Nav className="container-fluid">
            <Navbar.Brand>
              <img
                alt=""
                src="../../logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              &nbsp;&nbsp;R &nbsp;  U &nbsp; D
            </Navbar.Brand>
          </Nav>

          {user.isGuestUser === false && (
            <Nav >
              <NavItem className="profile-name border-left pl-2 ml-auto">
                <NavDropdown title={user.name} id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </NavItem>

              <NavItem className="profile-pic border-left pl-2 ml-auto">
                <img src={localStorage.getItem("profilePic")} alt="profile-pic" />
              </NavItem>
            </Nav>
          )}
        </Navbar>
      </>
    </div>

  );
};

export default Header;


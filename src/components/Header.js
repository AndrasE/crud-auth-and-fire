import React from "react";
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
    <header >

      <h1>CRUD</h1>
      
      {user.isGuestUser===false && (
        <div>
        <h2>{user.name}</h2>
        <img src={localStorage.getItem("profilePic")} alt="profile-pic"/>
        <button onClick={handleLogout}>
         Log out
      </button> 
      </div>
      )}
     

    </header>


  );
};

export default Header;

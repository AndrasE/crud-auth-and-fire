import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
 
  const { googleSignIn } = useUserAuth();
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

  return (
      <div>
      <Header />
      <div className="note">
        <h2>Please Login:</h2>
        <hr />
        <br/>
        <div>
          <button onClick={handleGoogleSignIn}>
            Google </button>
        </div>
        </div>
      </div>
  );
};

export default Login;

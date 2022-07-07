import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../firebase-config";
import React from 'react';
import phoneIcon from "../phoneIcon.png"


const userAuthContext = createContext();

const USER = { name: "Guest", isGuestUser: true } 

 // date/time short with added zeros
 const date = new Date()
 const MyTimeString = date.toLocaleTimeString(navigator.language, {
   hour: "2-digit",
   minute: "2-digit"
 });

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(USER);

  function googleSignIn() {
    console.log("Login initalized with Google account");
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        setUser({
          fname: result.user.displayName.split(" ")[0],
          lname: result.user.displayName.split(" ")[1],
          phoneNuShort: "",
          phoneNu: "",
          service: "Google",
          time: MyTimeString,
          isGuestUser: false
        });
        const profilePic = result.user.photoURL;
        localStorage.setItem("profilePic", profilePic);
        console.log("Loggining as:", result.user.displayName.split(" ")[0]);
      })
  }

  function facebookSignIn() {
    console.log("Login initalized with Facebook account");
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider)
      .then((result) => {
        setUser({
          fname: result.user.displayName.split(" ")[0],
          lname: result.user.displayName.split(" ")[1],
          phoneNuShort: "",
          phoneNu: "",
          service: "Facebook",
          time: MyTimeString,
          isGuestUser: false
        });
        const profilePic = result.user.photoURL;
        localStorage.setItem("profilePic", profilePic);
        console.log("Loggining as:", result.user.displayName.split(" ")[0]);
      })
  }

  function setUpRecaptha(phoneNumber) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container", 
      {}, 
      auth
      );
      recaptchaVerifier.render();
      return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
  }

  //as phonesignup is separate component and verify user otp within i had to send back this here
  //otherwise could move all the code here or mix match them but didn`t want the
  //code look too confusing, im sure there are better options for it, but it will do for now
  function displayPhoneSignInUser(phoneNumber) {
    console.log(phoneNumber);
    setUser({
      fname: "",
      phoneNuShort:  ("..." + phoneNumber.slice(phoneNumber.length - 4)),
      phoneNu: ("0" + phoneNumber.slice(3, phoneNumber.length)),
      service: "OTP",
      time: MyTimeString,
      isGuestUser: false
    });
    localStorage.setItem("profilePic", phoneIcon);
  }


  function logOut() {
    console.log("User logged out:", user.name)
    setUser(USER);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      console.log("Viewing page as:", user.name, user);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <userAuthContext.Provider
      value={{ user, logOut, googleSignIn, facebookSignIn, setUpRecaptha, displayPhoneSignInUser }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}


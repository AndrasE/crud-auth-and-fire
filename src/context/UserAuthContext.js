import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider
} from "firebase/auth";
import { auth } from "../firebase-config"; 
import React from 'react';

const userAuthContext = createContext();

const USER = { name: "Guest", isGuestUser: true }

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(USER);
  

  function logOut() {
    console.log("User logged out:", user.name)
    setUser(USER);
    return signOut(auth);
  }
  
  function googleSignIn() {
    console.log("Login initalized");
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      setUser({name: result.user.displayName.split(" ")[0],
              isGuestUser: false});
              const profilePic = result.user.photoURL;
              localStorage.setItem("profilePic", profilePic);

      console.log("Loggining as:", result.user.displayName.split(" ")[0]);
    })
  }

  function facebookSignIn() {
    console.log("Login initalized");
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      setUser({name: result.user.displayName.split(" ")[0],
              isGuestUser: false});
              const profilePic = result.user.photoURL;
              localStorage.setItem("profilePic", profilePic);
      console.log("Loggining as:", result.user.displayName.split(" ")[0]);
    })
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
      value={{ user, logOut, googleSignIn, facebookSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}


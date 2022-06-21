import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDakBuesprwJu4AguOOXCjZ4TJoFHQ268A",
  authDomain: "crud-auth-and-fire.firebaseapp.com",
  projectId: "crud-auth-and-fire",
  storageBucket: "crud-auth-and-fire.appspot.com",
  messagingSenderId: "979843203476",
  appId: "1:979843203476:web:137eee01897e61bfab4f81",
  measurementId: "G-PC5DQZL55T"
};
  

 // initialize firebase // auth // firestore db//
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

// const firebaseConfig = {
//   apiKey: "REACT_APP_API_KEY",
//   authDomain: "REACT_APP_AUTH_DOMAIN",
//   projectId: "project-mygag",
//   storageBucket: "REACT_APP_STORAGE_BUCKET",
//   messagingSenderId: "REACT_APP_MESSAGING_SENDER_ID",
//   appId: "REACT_APP_APP_ID",
//   measurementId: "REACT_APP_MEASUREMENTID_ID"
// };

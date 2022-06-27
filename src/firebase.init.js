// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwK21Btk3x6jhiCTBeEBDResDwl2JBHj4",
  authDomain: "genius-car-service-c2c82.firebaseapp.com",
  projectId: "genius-car-service-c2c82",
  storageBucket: "genius-car-service-c2c82.appspot.com",
  messagingSenderId: "884557503708",
  appId: "1:884557503708:web:66c50c57d02f837ca4a819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
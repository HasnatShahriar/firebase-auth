// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjiTw8KhWXHO-T5z6DF1Fk1GnLVElTgkY",
  authDomain: "fir-auth-cf9ed.firebaseapp.com",
  projectId: "fir-auth-cf9ed",
  storageBucket: "fir-auth-cf9ed.appspot.com",
  messagingSenderId: "612620114670",
  appId: "1:612620114670:web:005cbb2fb7d914f8da71ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
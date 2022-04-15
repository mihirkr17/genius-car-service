// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgJJnuHrvaK6hj6s10Fg3Jwh_KYE8-zN0",
  authDomain: "genius-car-service-a1e22.firebaseapp.com",
  projectId: "genius-car-service-a1e22",
  storageBucket: "genius-car-service-a1e22.appspot.com",
  messagingSenderId: "933450321546",
  appId: "1:933450321546:web:9b2d9203f85bcef3096773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
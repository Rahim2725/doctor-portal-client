// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoo3uIgbD_t__yXz56ss55w5XyUNqZQSQ",
  authDomain: "doctor-portal-65885.firebaseapp.com",
  projectId: "doctor-portal-65885",
  storageBucket: "doctor-portal-65885.appspot.com",
  messagingSenderId: "893607242813",
  appId: "1:893607242813:web:5c603372a1baf8fc028e54"

  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECT_ID,
  // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId:process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
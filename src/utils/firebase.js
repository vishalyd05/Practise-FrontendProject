// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFVvV04FTj7YR2TloXJkYRnHoU8ufY2Gs",
  authDomain: "netflixgpt-f6e62.firebaseapp.com",
  projectId: "netflixgpt-f6e62",
  storageBucket: "netflixgpt-f6e62.appspot.com",
  messagingSenderId: "1029860610065",
  appId: "1:1029860610065:web:e0ff8bef637ddd995361b0",
  measurementId: "G-K1TZ8FBWLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

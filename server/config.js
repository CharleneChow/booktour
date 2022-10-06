// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDiaVA2sQ8wM9PVtP5RR5FLePziH-6V-U",
  authDomain: "booktour-74dbc.firebaseapp.com",
  projectId: "booktour-74dbc",
  storageBucket: "booktour-74dbc.appspot.com",
  messagingSenderId: "231099980917",
  appId: "1:231099980917:web:47e08b122e4070d111ec3c",
  measurementId: "G-GELYCWP8V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEiKyALTr2acwwNgv6NMCXtHJcv8J3Rqc",
  authDomain: "minimal-list-2944f.firebaseapp.com",
  projectId: "minimal-list-2944f",
  storageBucket: "minimal-list-2944f.appspot.com",
  messagingSenderId: "831777731724",
  appId: "1:831777731724:web:ba2aec0bc86f273f0477a9",
  measurementId: "G-MY0T5FNC4Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

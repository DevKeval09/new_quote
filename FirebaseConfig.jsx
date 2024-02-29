// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTULEfdXUPV4yqWJnIE0UYJtrNb-a5WSE",
  authDomain: "ezhome-985e0.firebaseapp.com",
  projectId: "ezhome-985e0",
  storageBucket: "ezhome-985e0.appspot.com",
  messagingSenderId: "1055590704560",
  appId: "1:1055590704560:web:fa13a024200a41ddaa6275",
  measurementId: "G-J32C1YCT8C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

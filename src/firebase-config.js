// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF3B47x6Fe-fALv3gzxNRm1IZFNJDKVSA",
  authDomain: "bdrescue-901f3.firebaseapp.com",
  databaseURL: "https://bdrescue-901f3-default-rtdb.firebaseio.com",
  projectId: "bdrescue-901f3",
  storageBucket: "bdrescue-901f3.firebasestorage.app",
  messagingSenderId: "891309431738",
  appId: "1:891309431738:web:5661f7db5aa8cc74fc1b83",
  measurementId: "G-ZBQ1VGTKMY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


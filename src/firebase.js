// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt1gCBmTx_Rt_99L2_05Tn7ZYPW7AKr4M",
  authDomain: "roommatch-66697.firebaseapp.com",
  projectId: "roommatch-66697",
  storageBucket: "roommatch-66697.firebasestorage.app",
  messagingSenderId: "990660962988",
  appId: "1:990660962988:web:43e4e8529a8f7aa5258d09",
  measurementId: "G-389EN9FXTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
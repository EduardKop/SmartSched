// Import the functions you need from the SDKs you need
import { getApp, getApps } from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqJy-HzmUQyQ0kVMsZtW573rK5X3oQ1Vo",
  authDomain: "schedule-2e3bc.firebaseapp.com",
  projectId: "schedule-2e3bc",
  storageBucket: "schedule-2e3bc.appspot.com",
  messagingSenderId: "856652026392",
  appId: "1:856652026392:web:f41808771cb5e5d670696d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
export {app, db}

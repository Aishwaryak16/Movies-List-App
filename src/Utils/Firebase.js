// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cse_Hti2157j_mUwTaUi80usrMZJR84",
  authDomain: "netflix-gpt-5651c.firebaseapp.com",
  projectId: "netflix-gpt-5651c",
  storageBucket: "netflix-gpt-5651c.appspot.com",
  messagingSenderId: "15252955400",
  appId: "1:15252955400:web:d972f4409e279d1f878cbd",
  measurementId: "G-J8MW51K38V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN8ojeTHJjWyMIAo3WXqGzaTpk6fbMBHo",
  authDomain: "netflix-gpt-1246d.firebaseapp.com",
  projectId: "netflix-gpt-1246d",
  storageBucket: "netflix-gpt-1246d.firebasestorage.app",
  messagingSenderId: "853061914707",
  appId: "1:853061914707:web:ab8e162c69cf86469476a6",
  measurementId: "G-40E6VBCF25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
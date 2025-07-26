// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3E9r1k8-i2XQP57xyFGPMSfs8h9D6E_M",
  authDomain: "royal-pg-cfe2a.firebaseapp.com",
  projectId: "royal-pg-cfe2a",
  storageBucket: "royal-pg-cfe2a.appspot.com",
  messagingSenderId: "520557552419",
  appId: "1:520557552419:web:d54396f80ed7d821622296", 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

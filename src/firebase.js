import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnZGPjY0Z_3IbiTq4wK-LMMAKMqDlmhd4",
  authDomain: "tracking-app-87463.firebaseapp.com",
  projectId: "tracking-app-87463",
  storageBucket: "tracking-app-87463.appspot.com",
  messagingSenderId: "977028649331",
  appId: "1:977028649331:web:923b2c44edfbc11c613506",
  measurementId: "G-04WNJP4JXZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
};

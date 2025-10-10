import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_PQeto800UG90KWtRrSx60ak2XuyxK4M",
  authDomain: "ezmovie-d692e.firebaseapp.com",
  projectId: "ezmovie-d692e",
  storageBucket: "ezmovie-d692e.firebasestorage.app",
  messagingSenderId: "988927922725",
  appId: "1:988927922725:web:726c184a8a3006f89ae5cc",
  measurementId: "G-4FT6XJYRKN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

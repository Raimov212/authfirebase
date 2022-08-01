import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEznkfH4NygARpfKPeYx-gvX-FPTtqUrQ",
  authDomain: "authentication-1cc03.firebaseapp.com",
  projectId: "authentication-1cc03",
  storageBucket: "authentication-1cc03.appspot.com",
  messagingSenderId: "999689100730",
  appId: "1:999689100730:web:98025d2a65dff1fcf1d183",
  measurementId: "G-YCCM1QPK68",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

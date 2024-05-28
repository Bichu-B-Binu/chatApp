import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6NUCTA52GvRKOxUCJaMT1p9BC93tjF14",
  authDomain: "just-chat-15b43.firebaseapp.com",
  projectId: "just-chat-15b43",
  storageBucket: "just-chat-15b43.appspot.com",
  messagingSenderId: "1077895601382",
  appId: "1:1077895601382:web:55eb160f23dec4c2ecef27",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

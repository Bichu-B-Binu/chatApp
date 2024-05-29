import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbB9t6rXyZ57qIednXs3JSCMgRKvZVUBU",
  authDomain: "start-a-chat-c6c66.firebaseapp.com",
  projectId: "start-a-chat-c6c66",
  storageBucket: "start-a-chat-c6c66.appspot.com",
  messagingSenderId: "110141145714",
  appId: "1:110141145714:web:85564bc9568575d82578eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuO7Ru772Nlv0byxTIavtLYueiKMAgob4",
  authDomain: "chat-app-2af8d.firebaseapp.com",
  projectId: "chat-app-2af8d",
  storageBucket: "chat-app-2af8d.appspot.com",
  messagingSenderId: "468671894922",
  appId: "1:468671894922:web:d670cd43eb0f80135f2473",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

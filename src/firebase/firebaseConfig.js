import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3mihnDjiWqgzhT_Q5INL0J1TVir0DQzs",
  authDomain: "lexpetetion.firebaseapp.com",
  projectId: "lexpetetion",
  storageBucket: "lexpetetion.firebasestorage.app",
  messagingSenderId: "330929625625",
  appId: "1:330929625625:web:4bc2f5bfa97dacae5a2888",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
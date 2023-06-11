import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpvQ8cxBug7IxyhzMg4W5e5eQr_aapYbA",
  authDomain: "scissors-app-5c76b.firebaseapp.com",
  projectId: "scissors-app-5c76b",
  storageBucket: "scissors-app-5c76b.appspot.com",
  messagingSenderId: "835926773923",
  appId: "1:835926773923:web:a01b319b2cc7c348042f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
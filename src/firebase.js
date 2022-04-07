import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbPDk_FmjXdP_HJKFxDUEH--62Jm9lhrY",
  authDomain: "fintassignment.firebaseapp.com",
  projectId: "fintassignment",
  storageBucket: "fintassignment.appspot.com",
  messagingSenderId: "551231261161",
  appId: "1:551231261161:web:a2a03195181b6b5f4fe378",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx8GEfguivB5p-CXchKBS2Ngl85gOsyfs",
  authDomain: "project-ideas-1f627.firebaseapp.com",
  projectId: "project-ideas-1f627",
  storageBucket: "project-ideas-1f627.appspot.com",
  messagingSenderId: "1035329586311",
  appId: "1:1035329586311:web:fd9f490c494567ad912422",
  measurementId: "G-55KVTEVYKC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

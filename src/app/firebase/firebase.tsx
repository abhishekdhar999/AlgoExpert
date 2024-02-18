 import { initializeApp, getApp, getApps } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCa-wLkfxW-cf8JBeGE-juuMcS68PlMrXk",
  authDomain: "algoarena-fe5f2.firebaseapp.com",
  projectId: "algoarena-fe5f2",
  storageBucket: "algoarena-fe5f2.appspot.com",
  messagingSenderId: "750723497104",
  appId: "1:750723497104:web:ef9ff07b2ced845a8b6c15"
};
// !getApps.length ?: getApp();
const app =  initializeApp(firebaseConfig) 

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
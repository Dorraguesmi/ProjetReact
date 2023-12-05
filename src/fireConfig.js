import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvGOdHu8pDZ9RgmD10NaJilrV_wcx4Bmw",
  authDomain: "authuser-86fc6.firebaseapp.com",
  projectId: "authuser-86fc6",
  storageBucket: "authuser-86fc6.appspot.com",
  messagingSenderId: "708876740216",
  appId: "1:708876740216:web:c86c2e6e137d83dfb52f8d",
  measurementId: "G-Q661S8TPCT",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;

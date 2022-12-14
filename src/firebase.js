// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyDqE1IfIaEDOiKTpLFuysLxob6GHGJqBQY",
  authDomain: "react-chatapp-47037.firebaseapp.com",
  databaseURL:'http://react-chatapp-47037.firebaseio.com',
  projectId: "react-chatapp-47037",
  storageBucket: "react-chatapp-47037.appspot.com",
  messagingSenderId: "416280779498",
  appId: "1:416280779498:web:5daacec5b3da51d9065593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjSC72y5ZyTF8Bcel0YCTrG7A33bwqJmA",
  authDomain: "whatsapp-clone-c7640.firebaseapp.com",
  projectId: "whatsapp-clone-c7640",
  storageBucket: "whatsapp-clone-c7640.appspot.com",
  messagingSenderId: "126288601084",
  appId: "1:126288601084:web:8679301385999e6c851c79",
  measurementId: "G-YK7EZHHGL7",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firebase.firestore();
const auth = app.firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

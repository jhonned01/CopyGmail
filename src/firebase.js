import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx5bW930Is_JKs5FGq8GM_iXqc0ILzVWg",
  authDomain: "clone-4dabc.firebaseapp.com",
  projectId: "clone-4dabc",
  storageBucket: "clone-4dabc.appspot.com",
  messagingSenderId: "708109777714",
  appId: "1:708109777714:web:ae8989a29a3f971f47b52b",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const Provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, Provider };

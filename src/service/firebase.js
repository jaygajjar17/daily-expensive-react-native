import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  appId: "",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

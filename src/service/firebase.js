import * as firebase from "firebase";
import firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKnJmHgohOKCQudNt4tWNhsioiz3UW8IM",
  authDomain: "YOUR-PROJECT-NAME.firebaseapp.com",
  databaseURL: "https://daily-expense-5cc43-default-rtdb.firebaseio.com",
  projectId: "daily-expense-5cc43",
  storageBucket: "daily-expense-5cc43.appspot.com",
  appId: "1:733353459239:ios:9bc90d24d2f043f00dd802",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

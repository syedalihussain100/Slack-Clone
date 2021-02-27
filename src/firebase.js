import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmirvP77tBNtZFE1ZYWRqFsnB5TAYVfOA",
  authDomain: "slackclone-bfd02.firebaseapp.com",
  projectId: "slackclone-bfd02",
  storageBucket: "slackclone-bfd02.appspot.com",
  messagingSenderId: "389098375761",
  appId: "1:389098375761:web:886d98e668788b36614670"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();

export default db;

export {auth,Provider};
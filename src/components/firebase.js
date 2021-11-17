import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWpQtmRkc7CxziszA-X9Je-oCfirSdaB4",
  authDomain: "fir-a4ab6.firebaseapp.com",
  projectId: "fir-a4ab6",
  storageBucket: "fir-a4ab6.appspot.com",
  messagingSenderId: "610959399680",
  appId: "1:610959399680:web:aa1db826d2b38aee3cb1e5",
  measurementId: "G-NFDJ5Z63FG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// firebaseApp.auth().createUserWithEmailAndPassword('test@email.com', 'twenty')
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

export { db, auth, provider };

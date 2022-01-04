import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnXHwI-er_5Czo50CHbB75DEC7dr-qyKA",
    authDomain: "react-firebase-auth-94b6b.firebaseapp.com",
    projectId: "react-firebase-auth-94b6b",
    storageBucket: "react-firebase-auth-94b6b.appspot.com",
    messagingSenderId: "60717679278",
    appId: "1:60717679278:web:73db721aa1ff82a92be33f"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider}


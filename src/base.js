import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZv56n-yj4ARpLo7TmoI3tVIqPqpwmvpA",
    authDomain: "los-sabores.firebaseapp.com",
    databaseURL: "https://los-sabores.firebaseio.com",
    projectId: "los-sabores",
    storageBucket: "los-sabores.appspot.com",
    messagingSenderId: "931234811552",
    appId: "1:931234811552:web:885e2c3eb9c4f7d885c3c5",
    measurementId: "G-1BPPE3E9CJ"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.auth().signInAnonymously().catch(error => console.log('something is wrong', error));


//   firebase.analytics();
let storage = firebase.storage();
export {
    storage, firebase as default
}
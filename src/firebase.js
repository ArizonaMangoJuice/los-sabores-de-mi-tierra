import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyDZv56n-yj4ARpLo7TmoI3tVIqPqpwmvpA",
    authDomain: "los-sabores.firebaseapp.com",
    databaseURL: "https://los-sabores.firebaseio.com",
    projectId: "los-sabores",
    storageBucket: "los-sabores.appspot.com",
    messagingSenderId: "931234811552",
    appId: "1:931234811552:web:d80dcf7ee97d2a6b85c3c5",
    measurementId: "G-QHPFB034FR"
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().signInAnonymously().catch(error => console.log('something is wrong'));


  let storage = firebase.storage();

  export {
      storage, firebase as default
  }
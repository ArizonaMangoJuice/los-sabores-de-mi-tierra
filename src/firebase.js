import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth'

let firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET
  }

  console.log('firebase config', firebaseConfig)
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().signInAnonymously().catch(error => console.log('something is wrong'));


  let storage = firebase.storage();

  export {
      storage, firebase as default
  }
import firebase from 'firebase';
require('@firebase/firestore')


const firebaseConfig = {
     apiKey: "AIzaSyCTz8v1odwjSOqhmoUWzZ1VTMVQuUvTjug",
      authDomain: "barteerapp.firebaseapp.com",
      databaseURL: "https://barteerapp.firebaseio.com",
      projectId: "barteerapp",
      storageBucket: "barteerapp.appspot.com",
      messagingSenderId: "182528488429",
      appId: "1:182528488429:web:195e789560a507036aede4"
    };
   
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

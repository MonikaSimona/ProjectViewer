import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyDTADv9cgWwYkPYQN70Xx-8mUOI4BNd-Ac",
    authDomain: "my-projects-app-6c359.firebaseapp.com",
    projectId: "my-projects-app-6c359",
    storageBucket: "my-projects-app-6c359.appspot.com",
    messagingSenderId: "1041683426164",
    appId: "1:1041683426164:web:6f003b85fe0b4f6ac71a21",
    measurementId: "G-42JLN7BX2J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;
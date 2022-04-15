import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3KwvaISBbjlSMJp2N-B-iS7IejJX-NPg",
    authDomain: "fir-clone-91597.firebaseapp.com",
    projectId: "fir-clone-91597",
    storageBucket: "fir-clone-91597.appspot.com",
    messagingSenderId: "97255968597",
    appId: "1:97255968597:web:7897ddb7bd4abd80f029dc"
  };

  
 const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

  export { db, auth }
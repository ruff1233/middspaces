import firebase from "firebase/compat/app"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyBYLlS23fStfieFfkMsqHh2XRkg8hpwLfE",
    authDomain: "middspaces-2b62c.firebaseapp.com",
    databaseURL: "https://middspaces-2b62c-default-rtdb.firebaseio.com",
    projectId: "middspaces-2b62c",
    storageBucket: "middspaces-2b62c.appspot.com",
    messagingSenderId: "674153831638",
    appId: "1:674153831638:web:a10324bfdfa4b23bbefd77"
  };

  firebase.initializeApp(firebaseConfig)
  const databaseRef = firebase.database().ref()
  export const resRef = databaseRef.child("Reservations")
  export const spaceRef = databaseRef.child("Spaces")
  export default firebase;
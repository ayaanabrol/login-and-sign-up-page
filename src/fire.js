import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzj4CViidVZbjeIu6llJlN438jLz6LJ3c",
    authDomain: "social-network-app-e80d7.firebaseapp.com",
    projectId: "social-network-app-e80d7",
    storageBucket: "social-network-app-e80d7.appspot.com",
    messagingSenderId: "683055726594",
    appId: "1:683055726594:web:0b3e28983e5380950c671b"
  };
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
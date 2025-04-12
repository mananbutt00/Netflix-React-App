import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//we need to somehow seed the database

//we need a config here, put your api details here
const config = {
  apiKey: "AIzaSyDrt6XRUkyyaW1Ps4Qmi_DMOvBjA1RpLQc",
  authDomain: "netflix-react-25495.firebaseapp.com",
  projectId: "netflix-react-25495",
  storageBucket: "netflix-react-25495.firebasestorage.app",
  messagingSenderId: "858353261394",
  appId: "1:858353261394:web:09b1004694c3a498e4788b",
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };

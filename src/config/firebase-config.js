// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDa-g_B32ymdJhbvJ1kSPHSHjzuzfEv224",
  authDomain: "syntactic-71b1c.firebaseapp.com",
  databaseURL: "https://syntactic-71b1c-default-rtdb.firebaseio.com",
  projectId: "syntactic-71b1c",
  storageBucket: "syntactic-71b1c.appspot.com",
  messagingSenderId: "214135620503",
  appId: "1:214135620503:web:f3eb122b9886dc2ae3fad2",
  measurementId: "G-G7SLGF75S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
export const user = auth.currentUser;
if(user) {
  console.log("WORKS")
} else {
  console.log("NOPEEE")
}

// onAuthStateChanged(auth, (user) => {
//   if(user){
//     const uid = user.uid;
//     console.log(uid)
//     console.log("WORKSS")
//   } else {
//     console.log('NOPE')
//   }
// })
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEL1dvM4TGwIOxbULTVSHH6dAeAjH8Og",
  authDomain: "boule-4fa75.firebaseapp.com",
  projectId: "boule-4fa75",
  storageBucket: "boule-4fa75.appspot.com",
  messagingSenderId: "861730530521",
  appId: "1:861730530521:web:ca39fe5f0630c8cb3f8ac8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//Initialize Firestore service
const db = getFirestore()
export default db
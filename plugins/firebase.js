// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqLJM93XyrMdPuLbb7w9KMDKgw3DK31M",
  authDomain: "past2future-2b55f.firebaseapp.com",
  projectId: "past2future-2b55f",
  storageBucket: "past2future-2b55f.appspot.com",
  messagingSenderId: "361824253218",
  appId: "1:361824253218:web:cbd77a2f9351d7abbb617b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

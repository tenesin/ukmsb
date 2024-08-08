// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcPPSki9vc0kT0qEuN5zr2EGfq73OM6rw",
  authDomain: "ukmsb-6c78c.firebaseapp.com",
  projectId: "ukmsb-6c78c",
  storageBucket: "ukmsb-6c78c.appspot.com",
  messagingSenderId: "881078967054",
  appId: "1:881078967054:web:2fd9157cce6e0cca16555f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init Firestore

const projectFirestore = firebase.firestore();
export { projectFirestore };
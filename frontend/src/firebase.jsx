// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/dabase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcZV25Rcj5H7SsZ-DMOWEL53-bJ9Gvpo4",
  authDomain: "chat-b7cc3.firebaseapp.com",
  projectId: "chat-b7cc3",
  storageBucket: "chat-b7cc3.firebasestorage.app",
  messagingSenderId: "1046680844508",
  appId: "1:1046680844508:web:323f0770900a8a10dedc19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app



export {db}

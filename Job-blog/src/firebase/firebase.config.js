// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2GmQ1nzTPR-DR_3eUy2iQ69K28q0WFoU",
  authDomain: "job-blog-839ca.firebaseapp.com",
  projectId: "job-blog-839ca",
  storageBucket: "job-blog-839ca.appspot.com",
  messagingSenderId: "368744030665",
  appId: "1:368744030665:web:499ade47445bbf404cc818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
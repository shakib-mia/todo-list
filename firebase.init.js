// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4zglszx_40P813v016kjcahIs1x1_eDI",
  authDomain: "todo-list-6a40d.firebaseapp.com",
  projectId: "todo-list-6a40d",
  storageBucket: "todo-list-6a40d.appspot.com",
  messagingSenderId: "924282203541",
  appId: "1:924282203541:web:8d996f478ebe56f8415a9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

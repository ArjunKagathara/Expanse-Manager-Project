// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9FAS5xnIB7It5gvO3lDy9V6JC6rpCWh0",
  authDomain: "expense-manage-f2b6d.firebaseapp.com",
  projectId: "expense-manage-f2b6d",
  storageBucket: "expense-manage-f2b6d.appspot.com",
  messagingSenderId: "291468690735",
  appId: "1:291468690735:web:56d8acce2d835da6214dda",
  measurementId: "G-V4CL4L8K85",
  databaseURL: "https://expense-manage-f2b6d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };

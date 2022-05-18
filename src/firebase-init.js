// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBudLyvZvntppk6onMJkWLLh1TcwQpj1dw",
  authDomain: "todo-app-50869.firebaseapp.com",
  projectId: "todo-app-50869",
  storageBucket: "todo-app-50869.appspot.com",
  messagingSenderId: "400803247404",
  appId: "1:400803247404:web:eecbf394136fbaff7ca889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth 
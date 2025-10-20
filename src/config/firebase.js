import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyC4eR_QTv8aOERN7bmJSJ1cMMnkuwrjxds",
    authDomain: "blog-app-edffd.firebaseapp.com",
    projectId: "blog-app-edffd",
    storageBucket: "blog-app-edffd.firebasestorage.app",
    messagingSenderId: "658028740633",
    appId: "1:658028740633:web:f604d1b9a6fa7e46ceea88",
    measurementId: "G-47VN1479C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
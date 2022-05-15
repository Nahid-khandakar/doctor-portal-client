// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALAGeIGxKjQyoLWBBbTXYOTXQioZtexiM",
    authDomain: "doctor-portal-e2a05.firebaseapp.com",
    projectId: "doctor-portal-e2a05",
    storageBucket: "doctor-portal-e2a05.appspot.com",
    messagingSenderId: "44347709320",
    appId: "1:44347709320:web:fa7e6f8caa55017d824c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCXh5FDDuy0ND8jkuZ2wyw0sbPXE9lqWHQ",
    authDomain: "bponi-fe.firebaseapp.com",
    projectId: "bponi-fe",
    storageBucket: "bponi-fe.appspot.com",
    messagingSenderId: "84412780086",
    appId: "1:84412780086:web:bc84f9c459f35d4f325297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
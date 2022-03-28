import { initializeApp } from '/firebase/app';
import { } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { myFunction } from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
// Import the functions you need from the SDKs you need
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaz-ahotf4CgSNXer897AdyAh1fTDqOow",
  authDomain: "social-travel-579de.firebaseapp.com",
  projectId: "social-travel-579de",
  storageBucket: "social-travel-579de.appspot.com",
  messagingSenderId: "339818616115",
  appId: "1:339818616115:web:b92223c32196745a875a46",
  measurementId: "G-73W97T949Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

/* -----Para la autenticación-------*/
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = "es";
async function login() {
  try {
    const response = await auth.signInWithPopup(provider);
    console.log(response);
    return response.user;
  } catch (error) {
    throw new Error(error);
  }
}

function logout() {
  auth.signOut();
}

/* ----Para manipular botones--- */
const buttonLoginGoogle = document.querySelector("#login");
buttonLoginGoogle.addEventListener("click", async (e)=> {
  try{
    await login();
  }catch (error) {
  }
});
// myFunction();
// window.addEventListener('DOMcontentLoaded', () => {
//   console.log('works');
// });

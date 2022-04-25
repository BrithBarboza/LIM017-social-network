/* eslint-disable import/no-unresolved */

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  addDoc,
  getFirestore,
  collection,
  getDocs, onSnapshot,
} from './firebaseLinks.js';

import { app } from './Config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailVerification1 = () => sendEmailVerification(auth.currentUser);

const provider = new GoogleAuthProvider();

auth.languageCode = 'es';

// eslint-disable-next-line func-names
export const registerWithGoogle = () => signInWithPopup(auth, provider);
// Para ingresar con correo  y contraseña

export const LoginByEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
// Para saber si está ingresando
// console.log('ingresaste!');

export const logOutSocialTravel = () => {
  signOut(auth).then(() => {
    // console.log('cerraste sesión');
    // Sign-out successful.
  }).catch((error) => {
    // const callAlertParagraph = document.querySelector('#error');
    if (error === true) {
      // callAlertParagraph.textContent = 'Error al cerrar sesión';
    }
    // An error happened.
  });
};
const db = getFirestore(app);

export const addPost = (post) => addDoc(collection(db, 'Posts'), { post });
export const getPost = () => getDocs(collection(db, 'Posts'));
export const onGetPostInRealTime = (callback) => onSnapshot(collection(db, 'Posts'), callback);

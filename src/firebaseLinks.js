/* eslint-disable import/no-unresolved */

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,

} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import {
  addDoc,
  getFirestore,
  collection, getDocs, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  addDoc,
  getFirestore,
  collection, getDocs, onSnapshot,

};

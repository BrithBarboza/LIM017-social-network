/* eslint-disable import/no-unresolved */

import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { addDoc, getFirestore, deleteDoc, doc, collection, getDoc, getDocs,updateDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

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
  deleteDoc,
  doc,
  getDoc,
  collection, getDocs, onSnapshot,
  updateDoc,

};

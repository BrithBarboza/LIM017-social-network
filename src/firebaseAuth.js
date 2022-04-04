/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './Config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};

const provider = new GoogleAuthProvider();

auth.languageCode = 'es';

// eslint-disable-next-line func-names
export const registerWithGoogle = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;

      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode, errorMessage, credential, email);
    });
};

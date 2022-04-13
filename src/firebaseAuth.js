/* eslint-disable import/no-unresolved */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  // sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { app } from './Config.js';

const auth = getAuth(app);

export const registerWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const callAlertParagraph = document.querySelector('#error');

      if (errorCode === 'auth/email-already-in-use') {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = 'Otro usuario ya está utilizando el correo electrónico proporcionado.';
      } else if (errorCode === 'auth/weak-password'
      ) {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = 'La constraseña no es válida. Debe contener al menos seis caracteres.';
      } else if (errorCode === 'auth/invalid-email') {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = 'La direccióm de correo electrónico ingresada no es válida.';
      } else if (errorCode === true) {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = errorMessage;
      } else if (errorCode === 'auth/missing-email') {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.textContent = 'Debes ingresar tu correo electrónico.';
      }
    });

  // sendEmailVerification(auth.currentUser)
  //   .then(() => {
  //     Email verification sent!
  //     ...
  //     });
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
// Para ingresar con correo  y contraseña

export const LoginByEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user.email;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // const callAlertParagraph = document.querySelector('#error');

      if (errorCode === 'auth/wrong-password') {
        // callAlertParagraph.textContent = 'Contraseña incorrecta';
      }
    });
  // Para saber si está ingresando
  // console.log('ingresaste!');
};

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

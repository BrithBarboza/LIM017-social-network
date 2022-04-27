/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { registerWithGoogle } from '../firebaseAuth.js';
import { GoogleAuthProvider } from '../firebaseLinks.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  homeDiv.className = 'homeDiv';

  const logo = document.createElement('img');
  logo.setAttribute('src', './imgns/Vectorlogo.svg');
  logo.className = 'logoSocialTravel';

  const paragraph = document.createElement('p');
  paragraph.id = 'pInitial';
  paragraph.className = 'pInitial';

  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'btnLogin';
  buttonLogin.className = 'btnSingin';

  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'btnRegister';
  buttonRegister.className = 'btnSingin';

  paragraph.textContent = 'Ingresa y conoce todo sobre el mundo del turismo exploratorio';
  buttonLogin.textContent = 'Ingresar';
  buttonRegister.textContent = 'Regístrate aquí';

  const planeImg = document.createElement('img');
  planeImg.setAttribute('src', './imgns/avion.svg');
  planeImg.classList = 'planeImg';

  const buttonLoginWithGoogle = document.createElement('button');
  buttonLoginWithGoogle.id = 'btnLoginWithGoogle';
  buttonLoginWithGoogle.className = 'btnSingin';
  buttonLoginWithGoogle.textContent = 'Inicia con Google';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  buttonLoginWithGoogle.addEventListener('click', () => {
    registerWithGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      /* console.log(token, user); */
      // ...
      onNavigate('/feed');

      document.querySelectorAll('.profile').forEach(element => {
            element.setAttribute('src', user.photoURL);
            /* debugger; */
          });

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
  });

  homeDiv.appendChild(logo);
  homeDiv.appendChild(paragraph);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonLoginWithGoogle);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(planeImg);

  return homeDiv;
};

// este evento debe llamarse solo despues de que el div del hom aparezca,

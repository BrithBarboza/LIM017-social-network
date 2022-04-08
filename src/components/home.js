/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { registerWithGoogle } from '../firebaseAuth.js';

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

  const buttonLoginWithGoogle = document.createElement('button');
  buttonLoginWithGoogle.id = 'btnLoginWithGoogle';
  buttonLoginWithGoogle.className = 'btnSingin';

  const buttonRegister = document.createElement('button');
  buttonRegister.id = 'btnRegister';
  buttonRegister.className = 'btnSingin';

  paragraph.textContent = 'Ingresa y conoce todo sobre el mundo de Social Travel';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginWithGoogle.textContent = 'Inicia con Google';
  buttonRegister.textContent = 'Registrate aquí';

  const planeImg = document.createElement('img');
  planeImg.setAttribute('src', './imgns/avion.svg');
  planeImg.classList = 'planeImg';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLoginWithGoogle.addEventListener('click', () => onNavigate('/feed'));

  buttonLoginWithGoogle.addEventListener('click', () => {
    registerWithGoogle();
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

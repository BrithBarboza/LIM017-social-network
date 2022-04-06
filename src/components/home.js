/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { registerWithGoogle } from '../firebaseAuth.js';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  homeDiv.className = 'homeDiv';

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

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonLoginWithGoogle.addEventListener('click', () => onNavigate('/feed'));

  function visibleBackground() {
    const showBackground = document.getElementById('root');
    showBackground.classList.toggle('showbackground');
    return visibleBackground;
  }

  buttonLogin.addEventListener('click', visibleBackground);


  homeDiv.appendChild(paragraph);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonLoginWithGoogle);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;

};

if (home === homeDiv) {
  const btnLoginWithGoogle = document.querySelector('#btnLoginWithGoogle');
  btnLoginWithGoogle.addEventListener('click', () => {
    registerWithGoogle();
  });
} else{

};

// este evento debe llamarse solo despues de que el div del hom aparezca,

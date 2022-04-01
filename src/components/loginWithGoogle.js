import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const LoginWithGoogle = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'AQUI VA AUTENTIFICACION POR FIREBASE';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = '¿Ya tienes cuenta? Ingresa Aquí';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

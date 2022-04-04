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
// const btnLoginWithGoogle = document.querySelector('#btnLoginWithGoogle');
// btnLoginWithGoogle.addEventListener('click', () => {
//   registerWithGoogle();
// });

// este evento debe llamarse solo despues de que el div del hom aparezca

/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido a Social Travel';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

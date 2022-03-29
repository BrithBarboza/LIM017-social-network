// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido al Login';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

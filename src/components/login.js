// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const Login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenido';

  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo electronico';
  inputEmail.type = 'text';
  inputEmail.id = 'inputEmail';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

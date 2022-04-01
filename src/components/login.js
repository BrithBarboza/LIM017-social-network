// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const Login = () => {
  const homeDiv = document.createElement('div');

  const form = document.createElement('div');
  form.className = 'form';
  form.textContent = 'Aquí van los hijos';

  const Welcome = document.createElement('h1');
  Welcome.textContent = 'Bienvenido'; /* Revisar cómo hacer independiente este label */
  Welcome.id = 'Welcome';
  Welcome.className = 'Welcome';

  const label1 = document.createElement('label');
  label1.textContent = 'Correo electrónico'; /* Revisar cómo hacer independiente este label */
  label1.id = 'label1';
  label1.className = 'label';

  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Ingresa tu correo electronico';
  inputEmail.type = 'text';
  inputEmail.id = 'inputEmail';

  const label2 = document.createElement('label');
  label2.textContent = 'Contraseña'; /* Revisar cómo hacer independiente este label */
  label2.id = 'label2';
  label2.className = 'label';

  const inputPass = document.createElement('input');
  inputPass.placeholder = 'Ingresa tu contraseña';
  inputPass.type = 'text';
  inputPass.id = 'inputPass';

  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  /* homeDiv.appendChild(form); */
  /* homeDiv.appendChild(Welcome); */

  homeDiv.insertAdjacentElement("beforeend", Welcome);
  homeDiv.insertAdjacentElement("beforeend", label1);
  homeDiv.insertAdjacentElement("beforeend", inputEmail);
  homeDiv.insertAdjacentElement("beforeend", label2);
  homeDiv.insertAdjacentElement("beforeend", inputPass);
  homeDiv.insertAdjacentElement("beforeend", buttonHome);

  /* homeDiv.appendChild(label1);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(label2);
  homeDiv.appendChild(inputPass);
  homeDiv.appendChild(buttonHome); */

  return homeDiv;
};

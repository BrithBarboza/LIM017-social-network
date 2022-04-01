/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

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
  function visibleBackground() {
    const showBackground = document.getElementById('root');
    showBackground.classList.toggle('showbackground');
    return visibleBackground;
  }
  buttonLogin.addEventListener('click', visibleBackground);

  buttonLoginWithGoogle.addEventListener('click', () => onNavigate('/loginWithGoogle'));

  homeDiv.appendChild(paragraph);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonLoginWithGoogle);
  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};

/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
import { register } from './components/register.js';
import { Login } from './components/login.js';
/* import { registerWithGoogle, registerWithEmail } from './firebaseAuth.js'; */
import { feed } from './components/feed.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': Login,
  '/feed': feed,
  /* '/loginWithGoogle': LoginWithGoogle, */

};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());



/* Para mostrar contraseña */
export function showPassword(eyeOpen, eyeClose, password) {
  const eyeOpens = document.getElementById(eyeOpen);
  const eyeCloses = document.getElementById(eyeClose);
  const password0 = document.getElementById(password);
  eyeOpens.addEventListener('click', () => {
    eyeOpens.style.display = 'none';
    eyeCloses.style.display = '';
    password0.setAttribute('type', 'text');
  });
}
export function hidePassword(eyeOpen, eyeClose, password) {
  const eyeOpens = document.getElementById(eyeOpen);
  const eyeCloses = document.getElementById(eyeClose);
  const password0 = document.getElementById(password);
  eyeCloses.addEventListener('click', () => {
    eyeOpens.style.display = '';
    eyeCloses.style.display = 'none';
    password0.setAttribute('type', 'text');
  });
}

const sendInfoUser = document.querySelector('#sendInfo');
sendInfoUser.addEventListener('click', () => {
  registerWithEmail();
});

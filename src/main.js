/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
import { register } from './components/register.js';
import { Login } from './components/login.js';
import { feed } from './components/feed.js';
import { profile } from './components/profile.js';
// import { registerWithEmail } from './firebaseAuth.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': Login,
  '/feed': feed,
  '/profile': profile,
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

// const btnLoginWithGoogle = document.querySelector('#btnLoginWithGoogle');
// btnLoginWithGoogle.addEventListener('click', () => {
//   registerWithGoogle();
// });
// const btnSendForm = document.getElementById('sendInfo');

// btnSendForm.addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('emailRegister').value;
//   const password = document.getElementById('password').value;
//   console.log(email);

//   console.log(password);
//   registerWithEmail(email, password);
// });
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

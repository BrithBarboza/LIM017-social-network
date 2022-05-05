/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
import { register } from './components/register.js';
import { login } from './components/login.js';
import { feed } from './components/feed.js';
import { profile } from './components/profile.js';
// import { registerWithEmail } from './firebaseAuth.js';

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/feed': feed,
  '/profile': profile,
  /* '/loginWithGoogle': LoginWithGoogle, */

};

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');

  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  const component = routes[window.location.pathname];

  window.onpopstate = () => {
    rootDiv.appendChild(component());
  };

  rootDiv.appendChild(component());

  return rootDiv.appendChild(routes[pathname]());
};

window.addEventListener('DOMContentLoaded', () => {
  const pathname = window.location.pathname;

  onNavigate(pathname);
});
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

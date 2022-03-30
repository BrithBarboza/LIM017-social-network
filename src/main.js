/* eslint-disable import/no-cycle */
import { home } from './components/home.js';
import { register } from './components/register.js';
import { Login } from './components/login.js';
import { LoginWithGoogle } from './components/loginWithGoogle.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': Login,
  '/loginWithGoogle': LoginWithGoogle,
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

import { onNavigate } from '../src/main.js';
import { login } from '../src/components/login.js';
import { register } from '../src/components/register.js';
import { feed } from '../src/components/feed.js';
import { profile } from '../src/components/profile.js';
import { home } from '../src/components/home.js';

jest.mock('../src/firebaseLinks.js');

describe('Función onNavigate', () => {
  it('Debe dirigirte a la vista de la ruta "Register"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const registerComponent = register();
    expect(onNavigate('/register')).toEqual(registerComponent);
  });
  it('Debe dirigirte a la vista de la ruta "Login"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const loginComponent = login();
    expect(onNavigate('/login')).toEqual(loginComponent);
  });
  it('Debe dirigirte a la vista de la ruta "feed"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const feedComponent = feed();
    expect(onNavigate('/feed')).toEqual(feedComponent);
  });
  it('Debe dirigirte a la vista de la ruta "profile"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const profileComponent = profile();
    expect(onNavigate('/profile')).toEqual(profileComponent);
  });
  it('Debe dirigirte a la vista de la ruta "home"', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const homeComponent = home();
    expect(onNavigate('/')).toEqual(homeComponent);
  });
});

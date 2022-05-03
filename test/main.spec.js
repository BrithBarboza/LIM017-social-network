import { onNavigate } from '../src/main.js';
import { login } from '../src/components/login.js';
import { register } from '../src/components/register.js';

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
});

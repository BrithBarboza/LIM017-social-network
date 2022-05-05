import { login } from '../../src/components/login.js';

jest.mock('../../src/firebaseLinks.js');

describe('Mensaje de error para iniciar sesión', () => {
  it('Se debe mostrar un mensaje de error', () => {
    const signInWithEmailAndPassword = jest.fn((email, password) => Promise.resolve({
      email,
      password,

    }));

    signInWithEmailAndPassword.mockRejectedValue('El correo ingresado es inválido.');
    const result = login();
    const btn = result.querySelector('#btnLogin2');
    const inputEmail = result.querySelector('#inputEmail');
    const inputPassword = result.querySelector('#inputPass');
    inputEmail.value = 'brith@adn.com';
    inputPassword.value = '123456';
    btn.dispatchEvent(new Event('click'));
    signInWithEmailAndPassword().catch((error) => {
      expect(error).toEqual(
        'El correo ingresado es inválido.',
      );
    });
  });
});

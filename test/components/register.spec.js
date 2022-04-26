import { register } from '../../src/components/register';
import { registerWithEmail, sendEmailVerification1 } from '../firebaseAuth.js';

describe('sendEmailVerification', () => {
  it('debería ser una promesa', () => {
    // tengo elementos creados => elementos de HTML
    // tengo strings => datos primitivos
    // tengo promesas (objetos) => datos  no primitivos
    // tengo condicionales => booleans
    // tengo eventos de click que llaman a botones => handler
    const sendEmailVerification = () => Promise.resolve({});
    const divVerification = `<div></div>`;

    if (sendEmailVerification1 === true) {
      divVerification.innerHTML = 'Verifica en la bandeja de entrada, ¡enviamos un correo de confirmación!';
    }
    expect().toEqual();
  });
});

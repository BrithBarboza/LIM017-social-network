// importamos la funcion que vamos a testear
import { registerWithGoogle, registerWithEmail } from '../src/firebaseAuth.js';

describe('Registrarse con cuenta de Google', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithGoogle).toBe('function');
  });
});

describe('Registrarse con cuenta de correo y contraseña', () => {
  it('debería ser una función', () => {
    expect(typeof registerWithEmail).toBe('function');
  });
});

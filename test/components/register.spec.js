import { createUserWithEmailAndPassword } from '../../src/__mocks__/firebaseLinks';

jest.mock('../../src/firebaseLinks.js');

// funciones simuladas asíncronas que siempre rechazarán: mockRejectedValue(value)

describe(' createUserWithEmailAndPassword ', () => {
  it('Debe retornar un mensaje de error en el registro para el usuario', () => {
    createUserWithEmailAndPassword.mockRejectedValue('Error al intentar registrarse, intentelo de nuevo.');
    const email = 'tata@adn.com';
    const password = '123456';
    createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        expect(error).toBe('Error al intentar registrarse, intentelo de nuevo.');
      });
  });
});

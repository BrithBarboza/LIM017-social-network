// importamos la funcion que vamos a testear
import { onGetPostInRealTime, manuaLogin } from '../src/firebaseAuth';
// import { collection } from '../src/firebaseLinks';
import { signInWithEmailAndPassword } from '../src/firebaseLinks.js';

jest.mock('../src/firebaseLinks.js');

describe('onGetPostInRealTime', () => {
  it('debería ser una función', () => {
    expect(typeof onGetPostInRealTime).toBe('function');
  });
});
describe(' manuaLogin ', () => {
  // done es un callback que usamos para decirle a jest que nuestro cod es asíncrono.
  it('Debe ser  una función', () => {
    // expect(typeof manuaLogin).toBe('function');
  });
  it('No debe retornar un mensaje de error en el logueo incorrecto del usuario', (done) => {
    document.body.innerHTML = '<p id= "errorMessage"></p>';

    manuaLogin('tata@adc.com', '1234OK')
      .then(() => { // este siginifica que no hay error y por eso el parrafo estará vacío
        expect(document.getElementById('errorMessage').innerHTML).toBe('');
        done();
      });
  });
  it('Debe retornar un mensaje de error en el logueo incorrecto del usuario', (done) => {
    document.body.innerHTML = '<p id= "errorMessage"></p>';
    manuaLogin('tata@adc.com', '1234')
      .catch(() => {
        console.log('catch');
        expect(signInWithEmailAndPassword.mock.calls[0])
          .toEqual([{ _id: 'get-auth' }, 'tata@adc.com', '1234OK']);
        done();
      });
  });
});

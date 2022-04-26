// importamos la funcion que vamos a testear
import { onGetPostInRealTime } from '../src/firebaseAuth';
import { collection } from '../src/firebaseLinks';

jest.mock('../src/firebaseLinks.js');

describe('onGetPostInRealTime', () => {
  it('debería ser una función', () => {
    expect(typeof onGetPostInRealTime).toBe('function');
  });
});

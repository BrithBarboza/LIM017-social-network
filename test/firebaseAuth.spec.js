// importamos la funcion que vamos a testear
import { onGetPostInRealTime } from '../src/firebaseAuth';
import { collection } from '../src/firebaseLinks';

jest.mock('../src/firebaseLinks.js');

describe('onGetPostInRealTime', () => {
  it('debería ser una función', () => {
    const db = {};
    const result = onGetPostInRealTime(db);
    expect(collection.mock.calls[0]).toEqual([db, 'Posts']);
  });
});

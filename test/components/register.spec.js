import { register } from '../../src/components/register.js';
import { registerWithEmail, sendEmailVerification1 } from '../../src/firebaseAuth.js';

jest.mock('../../src/firebaseLinks.js');

describe('Envia mensaje de error cuando correo no coincide', () => {
  it('Arroja una alerta de error', () => {
    const functionRegister = register();

    const btnEmail = functionRegister.querySelector('#emailRegister');
    const btnEmail2 = functionRegister.querySelector('#emailRegister2');

    btnEmail.value = 'dominio@abc.com';
    btnEmail2.value = 'dom@abc.com';

    const btn = functionRegister.querySelector('#sendInfo');

    // const eventCreated = new Event('click');
    // btn.addEventListener('click');

    btn.dispatchEvent(new Event('click'));

    const messageError = functionRegister.querySelector('#error');
    expect(messageError.textContent).toBe('');
  });
});

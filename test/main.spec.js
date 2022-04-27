import { register } from '../src/components/register.js';
import { onNavigate } from '../src/main.js';

jest.mock('../src/firebaseLinks.js');

const registerTest = () => {
    const divRegister = `
    <div id="textTest">El segundo test</div>`;
    const divTest = document.createElement('div');
    divTest.innerHTML = divRegister;
    return divTest;
};
const componentsTest = {
    register: registerTest,
};

describe('main', () => {
    it('Debería de cargar el template de Register', () => {
        document.body.innerHTML = '<div id="divTest" class="divTest"></div>';
        onNavigate('/register', componentsTest);
        expect(document.getElementById('divTest').textContent.trim()).toEqual('El segundo test');
    });
});

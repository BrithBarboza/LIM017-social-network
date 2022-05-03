// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js'; /* la fx para crear el url. */
import { manuaLogin } from '../firebaseAuth.js';

export const login = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';

  const sectionForStyles = document.createElement('section');
  sectionForStyles.id = 'sectionForStyles';

  const form = document.createElement('form');
  form.className = 'formSignIn';
  form.id = 'formSignIn';

  const Welcome = document.createElement('h1');
  Welcome.textContent = 'Bienvenido'; /* Revisar cómo hacer independiente este label */
  Welcome.id = 'Welcome';
  Welcome.className = 'Welcome';

  const errorParagraph = document.createElement('p');
  errorParagraph.id = 'error2';

  const label1 = document.createElement('label');
  label1.textContent = 'Correo electrónico'; /* Revisar cómo hacer independiente este label */
  label1.id = 'label1';
  label1.className = 'label';

  const inputEmail = document.createElement('input');
  inputEmail.placeholder = ' Ingresa tu correo electronico';
  inputEmail.type = 'email';
  inputEmail.id = 'inputEmail';

  const label2 = document.createElement('label');
  label2.textContent = 'Contraseña'; /* Revisar cómo hacer independiente este label */
  label2.id = 'label2';
  label2.className = 'label';

  const inputPass = document.createElement('input');
  inputPass.placeholder = ' Ingresa tu contraseña';
  inputPass.type = 'password';
  inputPass.id = 'inputPass';

  const btnLogin = document.createElement('input');
  btnLogin.id = 'btnLogin2';
  btnLogin.className = 'btnLogin2';
  btnLogin.value = 'Inicia Sesión';
  btnLogin.setAttribute('type', 'submit');

  const imgLogin = document.createElement('img');
  imgLogin.id = 'imgLogin';
  imgLogin.className = 'imgLogin';
  imgLogin.setAttribute('src', './imgns/imageLogin.svg');

  const buttonHome = document.createElement('button');
  buttonHome.id = 'btnHome';
  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.insertAdjacentElement('beforeend', sectionForStyles);
  sectionForStyles.insertAdjacentElement('beforeend', imgLogin);
  form.insertAdjacentElement('beforeend', Welcome);
  form.insertAdjacentElement('beforeend', errorParagraph);
  form.insertAdjacentElement('beforeend', label1);
  form.insertAdjacentElement('beforeend', inputEmail);
  form.insertAdjacentElement('beforeend', label2);
  form.insertAdjacentElement('beforeend', inputPass);
  form.insertAdjacentElement('beforeend', btnLogin);
  sectionForStyles.insertAdjacentElement('beforeend', form);
  sectionForStyles.insertAdjacentElement('beforeend', buttonHome);

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = form.querySelector('#inputEmail').value;
    const password = form.querySelector('#inputPass').value;
    console.log(email, password);

    manuaLogin(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);

      onNavigate('/feed');

      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      const callAlertParagraph = document.querySelector('#error2');

      if (errorCode === 'auth/wrong-password') {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = 'Contraseña incorrecta';
      }
      if (errorCode === 'auth/user-not-found') {
        callAlertParagraph.classList.add('showMessageError');
        callAlertParagraph.innerText = 'Correo inválido';
      }
    });

    onNavigate('/feed');

    // Para limpiar el formulario

    homeDiv.querySelector('#formSignIn').reset();
  });

  return homeDiv;
};

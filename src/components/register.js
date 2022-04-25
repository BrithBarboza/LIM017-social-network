/* eslint-disable no-useless-escape */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js'; /* la fx para crear el url. */
import { registerWithEmail, sendEmailVerification1 } from '../firebaseAuth.js';

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'showbackground';
  const templateRegister = `
  <h1 id= "createdAccount" class = "Welcome">
  Crear cuenta</h1>
  <p id = "introduction" class = "paragraph">
   Crea una cuenta y conoce nuevos lugares en Social Travel</p>

    <!-- Mensajes de Verificación -->
    <p id="error" class="alertDanger " role="alert"></p>
    <p  class="alertVerification" role="alert"></p>

    <!-- Fin Mensajes de Verificación -->

   <form action="" id="formulario">
   <label for = "nameAndFirstname" class = "label"> Nombres y Apellidos </label>
   <input type = "text" placeholder = "Ingresa nombres y apellidos" id ="nameAndFirstname" required>
   <label for="emailRegister" class = "label"> Correo electrónico </label>
   <input type = "email" placeholder = "Ingrese su correo electrónico" id ="emailRegister"
   required>
   <label for = "emailRegister2" class = "label"> Confirmar correo electrónico </label>
   <input type = "text" placeholder = "Ingrese nuevamente su correo electrónico" id ="emailRegister2" 
   required>
   <label for = "password" class = "label"> Contraseña </label>
   <input type = "password" placeholder = "Ingrese una contraseña con máximo 16 caracteres" 
   id ="password" minlength="6" maxlength="16" required>
   <img src="./imgns/visibility_black_24dp.svg" alt="eye" id="eyeOpen">
   <img src="./imgns/visibility_off_black_24dp.svg" alt="eye" id="np" style="display:none;">
   <input  type = "submit" class ="sendInfo" id = "sendInfo" value="Crear cuenta"> 
   </form>   
  `;
  homeDiv.innerHTML += templateRegister;

  const btnSendForm = homeDiv.querySelector('#sendInfo');

  btnSendForm.addEventListener('click', (e) => {
    e.preventDefault();
    const email = homeDiv.querySelector('#emailRegister').value;
    const password = homeDiv.querySelector('#password').value;
    // console.log(email);

    // console.log(password);
    registerWithEmail(email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      sendEmailVerification1(email).then((value) => {
        console.log(value);
        // Email verification sent!
        const divVerification = homeDiv.querySelector('.alertVerification');
        if (sendEmailVerification1 === true) {
          divVerification.innerHTML = 'Verifica en la bandeja de entrada, ¡enviamos un correo de confirmación!';
        }
      // ...
      }).catch((error) => {
        console.log(error);
      });
    })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const callAlertParagraph = homeDiv.querySelector('#error');

        if (errorCode === 'auth/email-already-in-use') {
          callAlertParagraph.classList.add('showMessageError');
          callAlertParagraph.innerText = 'Otro usuario ya está utilizando el correo electrónico proporcionado.';
        } else if (errorCode === 'auth/weak-password'
        ) {
          callAlertParagraph.classList.add('showMessageError');
          callAlertParagraph.innerText = 'La constraseña no es válida. Debe contener al menos seis caracteres.';
        } else if (errorCode === 'auth/invalid-email') {
          callAlertParagraph.classList.add('showMessageError');
          callAlertParagraph.innerText = 'La direccióm de correo electrónico ingresada no es válida.';
        } else if (errorCode === true) {
          callAlertParagraph.classList.add('showMessageError');
          callAlertParagraph.innerText = errorMessage;
        } else if (errorCode === 'auth/missing-email') {
          callAlertParagraph.classList.add('showMessageError');
          callAlertParagraph.textContent = 'Debes ingresar tu correo electrónico.';
        }
      });

    // Para limpiar el Form

    homeDiv.querySelector('#formulario').reset();
  });

  // homeDiv.textContent = 'Bienvenido a Social Travel';
  const buttonHome = document.createElement('button');
  buttonHome.id = 'buttonHome';

  buttonHome.textContent = '¿Ya tienes cuenta? Ingresa Aquí';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

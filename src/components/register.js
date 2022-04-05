/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const register = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'showbackground';
  const templateRegister = `
  <h1 id= "createdAccount" class = "Welcome">
  Crear cuenta</h1>
  <p id = "introduction" class = "paragraph">
   Crea una cuenta y conoce nuevos lugares en Social Travel</p>
   <form action="" id="formulario">
   <label for = "nameAndFirstname" class = "label"> Nombres y Apellidos </label>
   <input type = "text" placeholder = "Ingresa nombres y apellidos" id ="nameAndFirstname">
   <label for="emailRegister" class = "label"> Correo electrónico </label>
   <input type = "email" placeholder = "Ingrese su correo electrónico" id ="emailRegister">
   <label for = "emailRegister2" class = "label"> Confirmar correo electrónico </label>
   <input type = "text" placeholder = "Ingrese nuevamente su correo electrónico" id ="emailRegister2">
   <label for = "password" class = "label"> Contraseña </label>
   <input type = "password" placeholder = "Ingrese una contraseña segura" id ="password">
   <img src="./imgns/visibility_black_24dp.svg" alt="eye" id="eyeOpen">
   <img src="./imgns/visibility_off_black_24dp.svg" alt="eye" id="eyeClose" style="display:none;">
   <button id = "sendInfo" type = "send" class ="sendInfo"> Crear Cuenta </button>
   </form>   
  `;
  homeDiv.innerHTML += templateRegister;

  // homeDiv.textContent = 'Bienvenido a Social Travel';
  const buttonHome = document.createElement('button');
  buttonHome.id = 'buttonHome';

  buttonHome.textContent = '¿Ya tienes cuenta? Ingresa Aquí';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

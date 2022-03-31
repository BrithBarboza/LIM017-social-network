/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js'; /* la fx para crear el url. */

export const register = () => {
  const homeDiv = document.createElement('div');
  const templateRegister = `<h1 id= "createdAccount" class = "Welcome">
  Crear cuenta</h1>
  <p id = "introduction" class = "paragraph">
   Crea una cuenta y conoce nuevos lugares en Social Travel</p>
   <label id = "nameAccountLabel" class = "label"> Nombres y Apellidos </label>
   <input type = "text" placeholder = "Ingresa nombres y apellidos" id ="nameAndFirstname">
   <label id = "emailAccountLabel" class = "label"> Correo electrónico </label>
   <input type = "text" placeholder = "Ingrese su correo electrónico" id ="emailRegister">
   <label id = "confirmationAccountLabel" class = "label"> Confirmar correo electrónico </label>
   <input type = "text" placeholder = "Ingrese nuevamente su correo electrónico" id ="emailRegister">
   <label id = "paswordLabel" class = "label"> Contraseña </label>
   <input type = "text" placeholder = "Ingrese una contraseña segura" id ="password">
  `;
  homeDiv.innerHTML += templateRegister;

  // homeDiv.textContent = 'Bienvenido a Social Travel';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};

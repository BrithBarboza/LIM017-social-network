/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logOutSocialTravel } from '../firebaseAuth.js';

export const feed = () => {
  const feedDiv = document.createElement('div');
  const templateFeed = `
  <section id= "feed" class = "contenedor-textos">

  <nav class="Menu" id="Menu">
    <div id = "introduction">
    <img src="./imgns/Vectorlogo.svg" class= "logo">
    <a title="Mi perfil" href=""><img src="./imgns/blank-profile-picture.webp" class = "profile" alt="Mi Perfil" /></a>
    </div>
    <div id = "regards">
     <span>Hola + '_______' </span>
    </div>
  </nav>

  <h2>Descubre un nuevo lugar para visitar</h2>

  <div id = "post">
  <div id = "photoProfile">
  <img src = "./imgns/blank-profile-picture.webp" width = "30px" height = "30px">
  </div>
  <input type = "text" class = "cta" placeholder = "¿Quiéres contarnos tu experiencia?">
  </div>

  <div class ="modal-container">
  <div id = "containerPost" class = "modal modal-close">

  <div class = "textAndSelect">
  <span class = "textModal">Escribe tu reseña</span>
  <div id = "categories" class ="filter">
  <select>
  <option>Lugares</option>
  <option>Hospedajes</option>
  <option>Restaurantes</option>
  <option>Bares</option>
  </select>
  </div>
  </div>

  <input type = "text" class = "inputPost" placeholder = "¿Qué es lo más impresionante de tu visita? Cuéntanos...">

  <p class = "close">X</p>

  <div id = "containerIconTransports">
  <span>Selecciona el/los transporte/s que usaste para llegar aquí</span>
  <div id = "TransportButtons">

   <i id = "walk"><img class = "transIcon" src = "./imgns/transportation_walk.svg"></i>
   <i id = "car"><img class = "transIcon" src = "./imgns/transportation_car.svg"></i>
   <i id = "boat"><img class = "transIcon" src = "./imgns/transportation_boat.svg"></i>
   <i id = "train"><img class = "transIcon" src = "./imgns/transportation_train.svg"></i>
   <i id = "bicycle"><img class = "transIcon" src = "./imgns/transportation_bicycle.svg"></i>
   <i id = "motorcycle"><img class = "transIcon" src = "./imgns/transportation_motorcycle.svg"></i>
  </div>

  <div class = "postButtons">
  <button type = "button" id = "postPhotosButton" class = "modalButton">Fotos</button>
  <button type = "button" id = "postButton" class = "modalButton">Publicar</button>
  </div>

  </div>
  </div>

  </section>
`;
  feedDiv.innerHTML += templateFeed;

  const cerrar = feedDiv.querySelectorAll('.close')[0];
  const abrir = feedDiv.querySelectorAll('.cta')[0];
  const modal = feedDiv.querySelectorAll('.modal')[0];
  const modalC = feedDiv.querySelectorAll('.modal-container')[0];

  abrir.addEventListener('click', (e) => {
    e.preventDefault();
    modalC.style.opacity = '1';
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
  });

  cerrar.addEventListener('click', () => {
    modal.classList.toggle('modal-close');
    setTimeout(() => {
      modalC.style.opacity = '0';
      modalC.style.visibility = 'hidden';
    }, 800);
  });

  window.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target === modalC) {
      modal.classList.toggle('modal-close');
      setTimeout(() => {
        modalC.style.opacity = '0';
        modalC.style.visibility = 'hidden';
      }, 800);
    }
  });

  const btnLogOut = document.createElement('a');
  btnLogOut.setAttribute('href', '');
  btnLogOut.id = 'logOut';
  btnLogOut.className = 'btnLogOut';
  btnLogOut.textContent = 'Cerrar Sesión';

  feedDiv.insertAdjacentElement('beforeend', btnLogOut);

  const logOut = feedDiv.querySelector('#logOut');
  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    logOutSocialTravel();
    onNavigate('/');
  });

  return feedDiv;
};

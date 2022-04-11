/* import { onNavigate } from '../main.js'; */

export const feed = () => {
  const feedDiv = document.createElement('div');
  const templateFeed = `
  <section id= "feed" class = "contenedor-textos">

  <nav class="Menu" id="Menu">
    <div id = "introduction">
    <img src="./imgns/Vectorlogo.svg" class= "logo">
    <a title="Mi perfil" href=""><img src="./imgns/blank-profile-picture.webp" width = "40px" height = "40px" alt="Mi Perfil" /></a>
    </div>
    <div id = "regards">
     <span>Hola + '_______' </span>
    </div>
  </nav>

  <h2>Descubre un nuevo lugar para visitar</h2>

  <input type = "text" class = "cta" placeholder = "¿Quiéres contarnos tu experiencia?">
  <div id = "photoProfile">
  <img src = "./imgns/blank-profile-picture.webp" width = "30px" height = "30px">
  </div>

  <div class ="modal-container">
  <div id = "containerPost" class = "modal modal-close">

  <div id = "categories">
  <select>
  <option>Lugares</option>
  <option>Hospedajes</option>
  <option>Restaurantes</option>
  <option>Bares</option>
  </select>
  </div>

  <input type = "text" class = "cta" placeholder = "¿Qué es lo más impresionante de tu visita? Cuéntanos...">

  <p class = "close">X</p>

  <div id = "TransportButtons">
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  </div>

  <button>Fotos</button>
  <button type = "button" id = "postButton" class = "postButton">Publicar</button>
  </div>
  </div>

  </section>
`;
  feedDiv.innerHTML += templateFeed;

  let cerrar = feedDiv.querySelectorAll(".close")[0];
  let abrir = feedDiv.querySelectorAll(".cta")[0];
  let modal = feedDiv.querySelectorAll(".modal")[0];
  let modalC = feedDiv.querySelectorAll(".modal-container")[0];

  abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
  })

  cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 800)
  })

  window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalC) {
      modal.classList.toggle("modal-close");
      setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
      }, 800)
    }
  })
  return feedDiv;
};

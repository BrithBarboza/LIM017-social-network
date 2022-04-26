/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';
import { onGetPostInRealTime } from '../firebaseAuth.js';

export const profile = () => {
  const profileDiv = document.createElement('div');
  profileDiv.id = 'profileDiv';

  const postCreatedByUser = document.createElement('div');
  postCreatedByUser.id = 'postCreatedByUser';
  postCreatedByUser.className = 'cardsPosted';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetPostInRealTime((querySnapShot) => { // console.log(querySnapShot);
      // variable con string vacio para que cada que se recorra añadamos info al contenedor
      let html = '';

      querySnapShot.forEach((doc) => {
        const postInProfile = doc.data();
        html += `
        <section class = 'containerCards'>
        <div id = 'editPost'>

        <div class = "infoOfPost">
        <div class = "titleOfData">Santuario de Reserva Nacional</div>
        <div class = "dateOfData">22/04/22 11:54 hs.</div>
        </div>
  
        <button id = "editPostButton" value =""> ... </button>
        <button id = "edit"> Editar </button>
        <button class ="delete" data-id = "${doc.id}"> Borrar </button>
        </div>


        <div class = 'cardsOfData'> ${doc.data().post}</div>
        </section>
    `;
      });

      // creamos este div para limpiar el html
      postCreatedByUser.innerHTML = html;
    });
  });

  profileDiv.insertAdjacentElement('beforeend', postCreatedByUser);

  return profileDiv;
};

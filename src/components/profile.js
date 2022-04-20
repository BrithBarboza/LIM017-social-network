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
    <div id = 'editPost'
    <button> ... </button>
    </div>
    <div class = 'cardsOfData'> ${postInProfile.post}</div>
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

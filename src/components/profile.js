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
        <section class = "frame">
    <div class = 'containerCards'>

    <div id = "firstPartPost">
    <img src = "./imgns/imageProfile.jpg" id = "photoProfileCard" width = "50px" height = "50px">
    <label class = "nameOfProfileCard">Chris Martins</label>
    <a href="" class="fa-regular fa-heart" width = "40px" height = "40px"></a>
    </div>

    <div id = "secondPartPost">
    <div id = 'headerOfPost'>
    <div class = "infoOfPost">
    <div class = "titleOfData">${doc.data().title}</div>
    <div class = "dateOfData">22/04/22 11:54 hs.</div>
    </div>
  
    <button id = "editPostButton" value =""> ... </button>
    <button data-id = "${doc.id}" class = "editPost"> Editar </button>
    <button class ="delete" data-id = "${doc.id}"> Borrar </button>
    </div>

    <div class = 'showCategories'> ${doc.data().categories}</div>
    <div class = 'cardsOfData'> ${doc.data().post}</div>
    </div>

    </div>
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

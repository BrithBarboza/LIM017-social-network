/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';
import { onGetPostInRealTime, // logOutSocialTravel
} from '../firebaseAuth.js';

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

  // const btnLogOut = document.createElement('a');
  // btnLogOut.setAttribute('href', '');
  // btnLogOut.id = 'logOut';
  // btnLogOut.className = 'btnLogOut';
  // btnLogOut.textContent = 'Cerrar Sesión';

  // const logOut = profileDiv.querySelector('#logOut');
  // logOut.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   logOutSocialTravel();
  //   onNavigate('/');
  // });

  profileDiv.insertAdjacentElement('beforeend', postCreatedByUser);

  return profileDiv;
};

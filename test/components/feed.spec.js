import { colorDiv } from '../../src/components/feed.js';
import { addPost } from '../../src/firebaseAuth.js';

jest.mock('../../src/firebaseLinks.js');

const dataTest = [{
  categories: 'Bares',
  post: 'Es un buen lugar para compartir con amigos',
  title: 'El estadio',
},
{
  categories: 'Hospedajes',
  post: 'Está genial compartir áreas comunes con otros turistas. La temática del hospedaje es única',
  title: 'Kokopelli Hostel Cusco',
},
];

describe('Test de color de section según categorías', () => {
  it('colorDiv show the color of section', () => {
    expect(colorDiv('Hospedajes')).toBe('#65B2C6');
  });
});

describe('SendPost', () => {
  it('si no es publicación vacia retorna true', () => {
    const result = addPost();
    const title = result.querySelector('.title');
    const post = result.querySelector('.inputPost');
    const categories = result.querySelector('#categories');

    const btn = result.querySelector('#postButton');
    title.innerText = 'Hotel Palma azul';
    categories.innerText = 'Lugares';
    post.innerText = 'Es un hotel ubicado en las costas de manabí...';

    expect(btn.dispatchEvent(new Event('click'))).toBe(true);
  });
});

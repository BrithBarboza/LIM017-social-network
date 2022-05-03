import { colorDiv } from '../../src/components/feed.js';

/* const dataTest = [{
    categories: "Bares",
    post: "Es un buen lugar para compartir con amigos",
    title: "El estadio",
},
{
    categories: "Hospedajes",
    post: "Está genial compartir áreas comunes con otros turistas.
     La temática del hospedaje es única",
    title: "Kokopelli Hostel Cusco",
}
] */

describe('Test de color de section según categorías', () => {
  it('colorDiv show the color of section', () => {
    expect(colorDiv('Hospedajes')).toBe('#65B2C6');
  });
});

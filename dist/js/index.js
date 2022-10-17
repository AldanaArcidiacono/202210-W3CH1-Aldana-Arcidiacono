import { characters } from '../characters.js';
const main = () => {
    const cardEditor = () => {
        const eCardImg = document.querySelector('img');
        eCardImg.src = 'img/joffrey.jpg';
        const eCharacterName = document.querySelector('.character__name');
        eCharacterName.innerHTML = `${characters[0].name}`;
        const eCharactesrAge = document.querySelector('.list-age');
        eCharactesrAge.innerHTML = `${characters[0].age}`;
    };
    cardEditor();
};
document.addEventListener('DOMContentLoaded', main);

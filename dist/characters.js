import { Advisor } from './advisor.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Squire } from './squire.js';
const characters = [
    new King('Joffrey Baratheon', 'Baratheon', 18, 3),
    new Fighter('Jaime Lannister', 'Lannister', 40, 'sword', 10),
    new Fighter('Daenerys Targaryen', 'Targaryen', 24, 'dragons', 10),
    new Advisor('Tyrion Lannister', 'Targaryen', 43),
    new Squire('Bronn', 'Black Waters', 50, 5),
];
//characters[4].squiring = characters[1];

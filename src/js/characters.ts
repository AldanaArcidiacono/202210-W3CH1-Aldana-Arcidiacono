import { King } from './king';

const characters = [
    new King('Joffrey Baratheon', 'Baratheon', 18, 3),
    new King('Pepe', 'Peps', 35, 8),
    //new Fighter('Jaime Lannister', 'Lannister', 40)
];

characters[0].partner = characters[1];
// Tyron es asesor de Daenerys (Tiene un campo de asesor (ej partner))

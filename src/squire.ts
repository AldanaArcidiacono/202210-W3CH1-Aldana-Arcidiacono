import { Character } from './character.js';

export class Squire extends Character {
    patheticLevel: number;
    constructor(
        name: string,
        family: string,
        age: number,
        patheticLevel: number
    ) {
        super(name, family, age);
        this.patheticLevel = patheticLevel;
        this.message = 'I am a loser';
    }
}

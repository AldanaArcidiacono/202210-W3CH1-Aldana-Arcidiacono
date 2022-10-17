import { Character } from './character.js';
export class Squire extends Character {
    constructor(name, family, age, patheticLevel) {
        super(name, family, age);
        this.patheticLevel = patheticLevel;
        this.message = 'I am a loser';
    }
}

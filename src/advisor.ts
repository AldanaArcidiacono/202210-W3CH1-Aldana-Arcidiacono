import { Character } from './character.js';

export class Advisor extends Character {
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        this.message = `I don't know why, but I think I'm going to die soon`;
    }
}

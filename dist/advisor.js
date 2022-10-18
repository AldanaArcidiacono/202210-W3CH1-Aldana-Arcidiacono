import { Character } from './character.js';
export class Advisor extends Character {
    constructor(name, family, age) {
        super(name, family, age);
        this.message = `I don't know why, but I think I'm going to die soon`;
        this.boss = null;
    }
    hired(boss) {
        this.boss = boss;
    }
}

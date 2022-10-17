import { Character } from './character.js';
export class Fighter extends Character {
    constructor(name, family, age, weapon, skills) {
        super(name, family, age);
        this.weapon = weapon;
        this.skills = skills;
        this.message = 'First I punch and then I ask';
    }
}

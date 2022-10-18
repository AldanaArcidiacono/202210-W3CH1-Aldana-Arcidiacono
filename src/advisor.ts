import { Character } from './character.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Squire } from './squire.js';

export class Advisor extends Character {
    boss: King | Fighter | Squire | null;
    constructor(name: string, family: string, age: number) {
        super(name, family, age);
        this.message = `I don't know why, but I think I'm going to die soon`;
        this.boss = null;
    }
    hired(boss: King | Fighter | Squire | null) {
        this.boss = boss;
    }
}

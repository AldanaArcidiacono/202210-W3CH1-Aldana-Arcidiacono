import { Advisor } from './advisor.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';

export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static series = 'Game of Thrones';
    //advising: Fighter | null;
    //squiring: Fighter | null;
    image: string;
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        //this.advising = null;
        //this.squiring = null;
        this.image = '';
    }

    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}

import { King } from './king';

export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static series = 'Game of Thrones';
    partner: King | null;
    image: string;
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
        this.partner = null;
        this.image = '';
    }

    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}

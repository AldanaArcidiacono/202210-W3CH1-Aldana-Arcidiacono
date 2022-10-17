export class Character {
    constructor(name, family, age) {
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
Character.series = 'Game of Thrones';

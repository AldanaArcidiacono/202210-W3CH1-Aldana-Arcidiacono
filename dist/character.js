//export abstract class Character implements ICharacter, IMethodsCharacter {
export class Character {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
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

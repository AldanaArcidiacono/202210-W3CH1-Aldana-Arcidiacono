import { Character } from './character';
describe('Given the class Character', () => {
    describe('When we instantiate the class', () => {
        let expectedResult;
        let character;
        beforeEach(() => {
            // Arrange (lo que dice el when)
            const name = 'Arya';
            const family = 'Stark';
            const age = 14;
            expectedResult = {
                name,
                family,
                age,
                image: '',
                lifeStatus: true,
                message: '',
            };
            // Act
            character = new Character(name, family, age);
        });
        test('Then we have an object of this class', () => {
            // Assert
            expect(character).toEqual(expectedResult);
        });
        test('And we run a method death, then property lifeStatus should be false', () => {
            expect(character.lifeStatus).toBe(true);
            character.death();
            expect(character.lifeStatus).toBe(false);
        });
    });
});

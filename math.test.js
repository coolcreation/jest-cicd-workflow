const {add, subtract, multiply, divide} = require('./math.js')
console.log(add(4,9));

describe('Math.js tests', () => {
    it("Should test add ", () => {
        expect(add(2,2)).toBe(3);
    })
    it("Should test subtract ", () => {
        expect(subtract(16,3)).toBe(13);
    }) 
    it("Should test multiply ", () => {
        expect(multiply(48,3)).toBe(144);
    }) 
    it("Should test divide ", () => {
        expect(divide(32,8)).toBe(4);
    })
});
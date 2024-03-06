import mathFunctions from './math.js'

describe('Math.js tests', () => {
    it("Should test add ", () => {
        expect(mathFunctions.add(2,2)).toBe(4);
    })
    it("Should test subtract ", () => {
        expect(mathFunctions.subtract(16,3)).toBe(13);
    }) 
    it("Should test multiply ", () => {
        expect(mathFunctions.multiply(48,3)).toBe(144);
    }) 
    it("Should test divide ", () => {
        expect(mathFunctions.divide(32,8)).toBe(4);
    })
});
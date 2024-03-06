import result from './strings.js'

describe('Strings.js tests', () => {
    it("Should test result ", () => {
        expect(typeof(result())).toBe('string');
    })
});
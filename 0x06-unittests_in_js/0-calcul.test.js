const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        const result = calculateNumber(2.3, 5.6);
	assert.equal(result, 8);
    });
});

const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        let result = calculateNumber(2.3, 5.6);
	assert.equal(result, 8);
	result = calculateNumber(2, 4);
	assert.equal(result, 6);
	result = calculateNumber(-1, -2);
	assert.equal(result, -3);
	result = calculateNumber(0.0, 0.0);
	assert.equal(result, 0.0);
	result = calculateNumber(1, 3.7);
	assert.equal(result, 5);
	result = calculateNumber(1.5, 3.7);
	assert.equal(result, 6);
    });
});

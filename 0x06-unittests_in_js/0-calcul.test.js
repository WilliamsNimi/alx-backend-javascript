const calculateNumber = require('./0-calcul.js');
const assert = require('assert');
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        let result = calculateNumber(1.0, 0);
	assert.equal(result, 1);
	result = calculateNumber(0, 1.0);
	assert.equal(result, 1);
	result = calculateNumber(1.3, 0);
	assert.equal(result, 1);
	result = calculateNumber(0, 1.2);
	assert.equal(result, 1);
	result = calculateNumber(1.7, 1.2);
	assert.equal(result, 3);
	result = calculateNumber(1.3, 1.8);
	assert.equal(result, 3);
	result = calculateNumber(1.6, 1.8);
	assert.equal(result, 4);
    });
});

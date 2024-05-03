const calculateNumber = require('./1-calcul.js');
const assert = require('assert');
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        let result = calculateNumber('SUM', 1.0, 0);
	assert.equal(result, 1);
	result = calculateNumber('SUM', 0, 1.0);
	assert.equal(result, 1);
	result = calculateNumber('SUM', 1.3, 1.8);
	assert.equal(result, 3);
	result = calculateNumber('SUM', 1.5, 1.8);
	assert.equal(result, 4);
    });
    
    it('Should subtract two numbers and round to the nearest integer', () => {
        let result = calculateNumber('SUBTRACT', 1.0, 0);
	assert.equal(result, 1);
	result = calculateNumber('SUBTRACT', 0, 1.0);
	assert.equal(result, -1);
	result = calculateNumber('SUBTRACT', 1.3, 1.8);
	assert.equal(result, -1);
	result = calculateNumber('SUBTRACT', 1.5, 1.8);
	assert.equal(result, 0);
    });
    
    it('Should divide two numbers and round to the nearest integer', () => {
        let result = calculateNumber('DIVIDE', 2.3, 5.6);
	assert.equal(result, 0);
	result = calculateNumber('DIVIDE', 2, 5.6);
	assert.equal(result, 0);
	result = calculateNumber('DIVIDE', 5.6, 2);
	assert.equal(result, 3);
	result = calculateNumber('DIVIDE', 5.6, 2.5);
	assert.equal(result, 2);
    });
});

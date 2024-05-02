const calculateNumber = require('./1-calcul.js');
const assert = require('assert');
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        const result = calculateNumber('SUM', 2.3, 5.6);
	assert.equal(result, 8);
    });
    
    it('Should subtract two numbers and round to the nearest integer', () => {
        const result = calculateNumber('SUBTRACT', 2.3, 5.6);
	assert.equal(result, -3);
    });
    
    it('Should divide two numbers and round to the nearest integer', () => {
        const result = calculateNumber('DIVIDE', 2.3, 5.6);
	assert.equal(result, 0);
    });
});

const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        let result = calculateNumber('SUM', 1.0, 0);
	expect(result).to.equal(1);
	result = calculateNumber('SUM', 0, 1.0);
	expect(result).to.equal(1);
	result = calculateNumber('SUM', 1.3, 1.8);
	expect(result).to.equal(3);
	result = calculateNumber('SUM', 1.5, 1.8);
	expect(result).to.equal(4);
    });
    
    it('Should subtract two numbers and round to the nearest integer', () => {
        let result = calculateNumber('SUBTRACT', 1.0, 0);
	expect(result).to.equal(1);
	result = calculateNumber('SUBTRACT', 0, 1.0);
	expect(result).to.equal(-1);
	result = calculateNumber('SUBTRACT', 1.3, 1.8);
	expect(result).to.equal(-1);
	result = calculateNumber('SUBTRACT', 1.5, 1.8);
	expect(result).to.equal(0);
    });
    
    it('Should divide two numbers and round to the nearest integer', () => {
        let result = calculateNumber('DIVIDE', 2.3, 5.6);
	expect(result).to.equal(0);
	result = calculateNumber('DIVIDE', 2, 5.6);
	expect(result).to.equal(0);
	result = calculateNumber('DIVIDE', 5.6, 2);
	expect(result).to.equal(3);
	result = calculateNumber('DIVIDE', 5.6, 2.5);
	expect(result).to.equal(2);
	result = calculateNumber('DIVIDE', 5.6, 0);
	expect(result).to.equal('error');
	result = calculateNumber('DIVIDE', 0.3, 1);
	expect(result).to.equal(0);
    });
});

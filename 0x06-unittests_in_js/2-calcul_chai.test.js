const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;
describe('calculateNumber function', () => {
    it('Should add two numbers and round to the nearest integer', () => {
        const result = calculateNumber('SUM', 2.3, 5.6);
	expect(result).to.equal(8);
    });
    
    it('Should subtract two numbers and round to the nearest integer', () => {
        const result = calculateNumber('SUBTRACT', 2.3, 5.6);
	expect(result).to.equal(-3);
    });
    
    it('Should divide two numbers and round to the nearest integer', () => {
        const result = calculateNumber('DIVIDE', 2.3, 5.6);
	expect(result).to.equal(0);
    });
});

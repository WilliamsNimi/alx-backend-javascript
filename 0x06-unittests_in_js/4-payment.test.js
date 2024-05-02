const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const {expect} = require('chai');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should call the calculateNumber function with stub', () => {
        const stub = sinon.stub(utils, 'calculateNumber').returns(10)
	const console = sinon.spy(console, 'log');

	sendPaymentRequestToApi(100, 20);

	expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
	excpect(console.calledOnceWithExactly('The total is: 10')).to.be.true;

	stub.restore();
	console.restore();
    });
});

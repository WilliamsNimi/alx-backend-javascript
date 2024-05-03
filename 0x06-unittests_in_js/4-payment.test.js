const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const {expect} = require('chai');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should call the calculateNumber function with stub', () => {
        const stub = sinon.stub(utils, 'calculateNumber').returns(10)
	const consoleSpy = sinon.spy(console, 'log');

	sendPaymentRequestToApi(100, 20);

	expect(stub.calledOnce).to.be.true;
	expect(stub.calledWithExactly('SUM', 100, 20)).to.be.true;
	expect(consoleSpy.calledOnce).to.be.true;

	stub.restore();
	consoleSpy.restore();
    });
});

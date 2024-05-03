const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const {expect} = require('chai');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should call the calculateNumber function with spy', () => {
        const spy = sinon.spy(utils, 'calculateNumber')
	const consoleSpy = sinon.spy(console, 'log');

	sendPaymentRequestToApi(100, 20);

	expect(spy.calledOnce).to.be.true;
	expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;
	expect(consoleSpy.calledOnce).to.be.true;

	spy.restore();
	consoleSpy.restore();
    });
});

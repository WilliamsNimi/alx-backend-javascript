const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const {expect} = require('chai');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
	spy = sinon.spy(utils, 'calculateNumber');
	consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
	spy.restore();
	consoleSpy.restore();
    });
    it('Should call the calculateNumber function with spy', () => {

	sendPaymentRequestToApi(100, 20);

	expect(spy.calledOnce).to.be.true;
	expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;
	expect(consoleSpy.calledOnce).to.be.true;
    });
    it('Should call the calculateNumber function with spy, 10 10', () => {

	sendPaymentRequestToApi(10, 10);

	expect(spy.calledOnce).to.be.true;
	expect(spy.calledWithExactly('SUM', 10, 10)).to.be.true;
	expect(consoleSpy.calledOnce).to.be.true;
    });
});

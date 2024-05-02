const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const {expect} = require('chai');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    it('Should call the calculateNumber function with spy', () => {
        const spy = sinon.spy(utils, 'calculateNumber')
	const console = sinon.spy(console, 'log');

	sendPaymentRequestToApi(100, 20);

	expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
	excpect(console.calledOnceWithExactly('The total is: 120')).to.be.true;

	spy.restore();
	console.restore();
    });
});

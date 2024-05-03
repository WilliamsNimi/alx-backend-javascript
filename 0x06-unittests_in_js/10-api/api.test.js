const { expect } = require('chai');
const request = require('request');

describe('Index page test', () => {
    it('returns the right string', (done) =>{
	request('http://localhost:7865', (error, response, body) => {
	    expect(body).to.equal('Welcome to the payment system');
	    done();
	});
    });
    it('success 200', (done) =>{
	request('http://localhost:7865', (error, response, body) => {
	    expect(response.statusCode).to.equal(200);
	    done();
	});
    });
    it('Error', (done) =>{
	request('http://localhost:7865', (error, response, body) => {
	    expect(error).to.equal(error);
	    done();
	});
    });
    it('returns 200', (done) =>{
	request('http://localhost:7865/cart/12', (error, response, body) => {
	    expect(response.statusCode).to.equal(200);
	    done();
	});
    });
    it('returns 200', (done) =>{
	request('http://localhost:7865/cart/12', (error, response, body) => {
	    expect(body).to.equal('Payment methods for cart 12');
	    done();
	});
    });
    it('404', (done) =>{
	request('http://localhost:7865/cart/hhh', (error, response, body) => {
	    expect(response.statusCode).to.equal(404);
	    done();
	});
    });
     it('returns 200', (done) =>{
	request('http://localhost:7865/available_payments', (error, response, body) => {
	    expect(response.statusCode).to.equal(200);
	    done();
	});
     });
    it('returns the right message', (done) =>{
	request('http://localhost:7865/available_payments', (error, response, body) => {
	    expect(body).to.equal({
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
});
	    done();
	});
    });
    it('returns 200', (done) =>{
	request('http://localhost:7865/login', (error, response, body) => {
	    expect(response.statusCode).to.equal(200);
	    done();
	});
     });
});

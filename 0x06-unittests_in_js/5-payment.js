const utils = require('./utils');

module.exports = function sendPaymentRequestToAPI(totalAmount, totalShipping){
    result = utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

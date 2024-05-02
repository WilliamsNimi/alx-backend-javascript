const Utils = {};

Utils.calculateNumber = function calculateNumber(type, a, b){
    if(type === 'SUM'){
	return Math.round(a + b);
    }
    else if(type === 'SUBTRACT'){
	return Math.round(a - b);
    }
    else if(type === 'DIVIDE'){
	return Math.round(a / b);
    }
};

module.exports = Utils;

module.exports = function calculateNumber(type, a, b){
    if(type === 'SUM'){
	return Math.ceil(a + b);
    }
    else if(type === 'SUBTRACT'){
	return Math.ceil(a - b);
    }
    else if(type === 'DIVIDE'){
	return Math.ceil(a / b);
    }
}

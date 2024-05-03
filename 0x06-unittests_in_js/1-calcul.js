module.exports = function calculateNumber(type, a, b){
    let a_round = Math.round(a);
    let b_round = Math.round(b);
    if(type === 'SUM'){
	return a_round + b_round;
    }
    else if(type === 'SUBTRACT'){
	return a_round - b_round;
    }
    else if(type === 'DIVIDE'){
	if(b_round === 0 || b === 0){
	    return 'error';
	}
	return Math.round(a_round / b_round);
    }
}

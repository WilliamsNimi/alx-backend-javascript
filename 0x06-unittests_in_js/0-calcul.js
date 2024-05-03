module.exports = function calculateNumber(a, b){
    let a_round = Math.round(a);
    let b_round = Math.round(b);
    let sum = a_round + b_round;
    return sum;
}

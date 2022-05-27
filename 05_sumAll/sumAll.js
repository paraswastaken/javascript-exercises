const sumAll = function(a, b) {
    if(a<0||b<0||typeof(a)!="number"||typeof(b)!="number"){
        return 'ERROR';
    }
    let sum=0;
    let i= (a<b)?a:b;
    let j= (a>b)?a:b;
    for(i; i<=j; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

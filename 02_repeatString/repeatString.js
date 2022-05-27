const repeatString = function(str, num) {
    let out = '';
    if(num<0){
        return "ERROR";
    }
    while(num>0){
        out+=str;
        num--;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;

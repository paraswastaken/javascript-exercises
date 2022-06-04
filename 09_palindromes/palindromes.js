const palindromes = function (str) {
    let i, arr;
    str = str.toLowerCase();
    arr = Array.from(str);
    arr = arr.filter((st)=>st>='a' && st<='z');
    for(i=0;i<arr.length;i++){
        if(arr[i]!=arr[arr.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
